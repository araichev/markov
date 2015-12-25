import yaml
import json
import os

from invoke import run, task


YAML_DIR = 'poems/yaml/'
JSON_DIR = 'poems/jsonized/'

@task
def jsonize_poems():
    """
    Convert YAML-formatted poems to JSON-formatted poems.
    """
    for filename in os.listdir(YAML_DIR):
        in_path = os.path.join(YAML_DIR, filename)
        if not os.path.isfile(in_path):
            continue
        if not in_path.endswith('.yaml'):
            continue
        with open(in_path, 'r') as f:
            print('Converting {!s} to JSON'.format(filename))
            y = yaml.load(f)
            out_path = os.path.join(JSON_DIR, 
              filename.replace('.yaml', '.json'))
            json.dump(y, open(out_path, 'w'))

@task
def push_github():
    run("git push github master:gh-pages --follow-tags")
