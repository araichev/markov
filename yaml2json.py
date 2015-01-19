#!/usr/bin/env/python

import yaml
import json
import os

in_dir = 'poems/yaml/'
out_dir = 'poems/json/'

for filename in os.listdir(in_dir):
    in_path = os.path.join(in_dir, filename)
    if not os.path.isfile(in_path):
        continue
    if not in_path.endswith('.yaml'):
        continue
    with open(in_path, 'r') as f:
        print('Converting {!s} to JSON'.format(in_path))
        y = yaml.load(f)
        out_path = os.path.join(out_dir, filename.replace('.yaml', '.json'))
        json.dump(y, open(out_path, 'w'))

