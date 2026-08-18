import sys
sys.path.insert(0, r"D:\py-pkgs")
from pydriller import Repository
import os
repo_path = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
count = 0
for commit in Repository(repo_path).traverse_commits():
    count += 1
    if count <= 5:
        msg = commit.msg.splitlines()[0][:80] if commit.msg else ""
        print(f"{commit.hash[:8]} {msg}")
print(f"pydriller listed {count} commits")
raise SystemExit(0)
