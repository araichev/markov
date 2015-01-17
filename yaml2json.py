#!/usr/bin/env/python

import yaml
import json
import os

dirname = 'poems'

for filename in os.listdir(dirname):
    path = os.path.join(dirname, filename)
    if not os.path.isfile(path):
        continue
    if not path.endswith('.yaml'):
        continue
    with open(path, 'r') as f:
        print('Converting {!s} to JSON'.format(path))
        y = yaml.load(f)
        new_path = path.replace('.yaml', '.json')
        json.dump(y, open(new_path, 'w'))

