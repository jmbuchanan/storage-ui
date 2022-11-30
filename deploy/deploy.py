import sys
import os
from subprocess import *


def deploy_to_env(env_arg):
    cd_to_deploy_dir()
    return {
        'local-k8s': deploy_to_local_k8s,
        'dev': deploy_to_dev,
        'prod': deploy_to_prod
    }.get(env_arg, profile_help)


def deploy_to_local_k8s():
    print("Deploying to local k8s")

    CONTROL_PLANE_IP = "matt@192.168.1.23"

    #if running script from control plane
    if has_ip_address(CONTROL_PLANE_IP.split("@")[1]):

        push_image_on_local = ["./deploy-k8s.sh"]
        popen_wrapper(push_image_on_local)

    #else running script from remote machine (not control plane)
    else: 

        push_changes_to_remote = [
            "rsync", "-a",
            "--exclude", "../node_modules/", 
            "--delete", "../../storage-ui/", 
            "{remote}:/home/matt/k8s/storage-ui".format(remote=CONTROL_PLANE_IP)
        ]
        popen_wrapper(push_changes_to_remote)

        push_image_on_remote = ["ssh", CONTROL_PLANE_IP, "/home/matt/k8s/storage-ui/deploy/deploy-k8s.sh"]
        popen_wrapper(push_image_on_remote)

    print("Deployment script ran successfully")


def deploy_to_dev():
    print("deploy dev is not implemented")


def deploy_to_prod():
    print("deploy prod is not implemented")


def profile_help():
    print("First argument must be local-k8s, dev, or prod")


def cd_to_deploy_dir():
    #cd to this file's directory
    os.chdir(os.path.dirname(os.path.realpath(__file__))) 


def has_ip_address(ip_address):
    return run(['ip', 'addr'], stdout=PIPE).stdout.decode('utf-8').find(ip_address) != -1


def popen_wrapper(command):
    print(" ".join(command))

    proc = Popen(command, stdout=PIPE, stderr=PIPE)

    try:
        out, err = proc.communicate(timeout=600)

        if err != b'':
            print(err.decode('utf-8'))
        
        if out != b'':
            print(out.decode('utf-8'))

    except TimeoutExpired:
        print("{} failed with TimeoutExpired".format(command[0]))
        proc.kill()
        sys.exit()


if __name__ == "__main__":
    deploy_to_env(sys.argv[1])()
