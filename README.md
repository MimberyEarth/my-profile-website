# My Profile Website

## Purpose

The purpose of this repository is to hold the projects of deliverables for my DVOP class. 

This repository was made and edited over the course of two assignments, one with initial setup and the other setting up Github Actions.
The steps I took to complete this setup were as follows:

## Assignment 1: Version Control and Publishing with Git and GitHub

### Objective
Learn how to use Git for version control and publish your website to a public GitHub repository. This exercise will help you understand the fundamentals of source control management and the basics of continuous integration in DevOps.

### Instructions

#### Install Git on Your Local Machine
- **Windows**: Download and install Git from [git-scm.com/downloads](https://git-scm.com/downloads).

#### Initialize a Git Repository
1. Navigate to the directory containing your website files from the previous assignment.
2. Open a terminal or command prompt in that directory.
3. Initialize a new Git repository by running in your terminal or command window:
```
git init
```

#### Configure Git with Your Information (already configured)

Add Your Files to the Repository
Add all your website files to the staging area:
```
git add .
```

#### Commit Your Changes
Commit the added files with a meaningful message:
```
git commit -m "Initial commit of website files"
```

#### Create a New Public Repository on GitHub
Click the "+" icon in the top-right corner and select "New repository".

Name your repository (e.g., my-profile-website).

Set the repository to Public.

Do not initialize the repository with a README, .gitignore, or license (since you have already initialized a local repository).

#### Link Your Local Repository to GitHub
In your terminal, add the GitHub repository as a remote:
```
git remote add origin https://github.com/yourusername/my-profile-website.git
```
Replace yourusername with your GitHub username.

Push Your Local Repository to GitHub
Push your commits to GitHub:

```
git push -u origin master
```


#### Verify Your Repository on GitHub
Visit your GitHub repository URL and confirm that all your files are present.

### Challenges
The only real issue I ran into was some mis-named variables, and following a link to a localhost page that didn't exist.