#!/usr/bin/env/python
"""
Converts YAML-formatted poems to JSON-formatted poems.
"""
import yaml
import json
import os

IN_DIR = 'poems/yaml/'
OUT_DIR = 'poems/jsonized/'

for filename in os.listdir(IN_DIR):
    in_path = os.path.join(IN_DIR, filename)
    if not os.path.isfile(in_path):
        continue
    if not in_path.endswith('.yaml'):
        continue
    with open(in_path, 'r') as f:
        print('Converting {!s} to JSON'.format(in_path))
        y = yaml.load(f)
        out_path = os.path.join(OUT_DIR, filename.replace('.yaml', '.json'))
        json.dump(y, open(out_path, 'w'))

