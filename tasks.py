from invoke import run, task

@task
def push_github():
    run("git push github master:gh-pages --follow-tags")
