# Mobile Dev Class - Lab Workflow

This project is set up to manage your labs using Git branches.

## Current State
You are currently on branch: **lab1**

## Directory Structure
- `src/exercises/`: Place your specific exercise components here.
- `App.js`: The main entry point. You can import and render your exercises here.

## How to work
1.  **Do your work**: modifying files for Lab 1.
2.  **Save progress**:
    ```bash
    git add .
    git commit -m "Progress on Lab 1"
    ```

## Starting Next Lab (e.g., Lab 2)
When Lab 1 is complete and you want to start Lab 2 based on your previous work:
```bash
git checkout -b lab2
```
This creates a new branch `lab2` that includes everything from Lab 1.

## Submitting/Deploying
To push a specific lab to GitHub:
```bash
git push origin lab1
```
