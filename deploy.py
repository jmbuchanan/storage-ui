from git import Repo

def git_push():
    try:
        repo = Repo()
        merge_branch = repo.active_branch.name
        repo.git.add(update=True)
        commit_message = input('Commit message: ')
        repo.index.commit(commit_message)
        repo.git.checkout('master')
        repo.git.merge(merge_branch)
        origin = repo.remote(name='origin')
        origin.push()
    except:
        print('An error occured.')

git_push()

