### Jose Soto, CISC3140-MW2 Spring 2021 [Lab 6 Assignment](https://docs.google.com/document/d/16Uxst6-RSu78PZIk_9e9BGnVGASmzEWurwjuj9KNGUg/edit)

# git and subversion

This lab involved using git and subversion(svn going forward) in the CLI to upload a file to a repository and noticing the difference in workflows 

## Task 1 Decentralized VCS (git)

[Located here on Github](https://github.com/ClevernessTech/Repo1)

gitsession.log shows the plain text commands entered if you just want to see the command history from start to finish.  I'm already a little familiar with git on the CLI so it's not too crazy for me to do.

Step 1) Create a repository online at your site of choice.  I did it on Github at the link above

Step 2) Initialize your git project in your project directory with **git init**.  

Step 3) Add any files you want to commit to the next update with **git add**.  

If you are working with multiple files, rather than using git add multiple times you can use **git add --all** which will add anything new/changed.

Step 4) You want to commit the changes to the next push you are going to do, so you want to run **git commit**.  

If the message is short you can run something like **git commit -m "Initial commit, adding introduction python program"** as I did.  

You could also reference a text file if you are writing up the commit in advance with the **-F** option.  So something like **git commit -F version.0.4.txt** would be a viable commit option as well.

Step 5) You want to add the location(s) that you are pushing to.  In my case I'm pushing to this github repo, I go to my empty repository and it'll give me both HTTPS and SSH options.  I already have SSH setup on my github account so my next command will be as follows


```
git remote add origin git@github.com:ClevernessTech/Repo1.git
```

which creates a remote url called *origin*.  If you don't have SSH setup, HTTPS still works for Github but it is depreciated so eventually you won't be able to push with it.  Plus, SSH is also more secure.  Now you aren't limited to uploading to github, or only 1 remote location.  You can add multiple, just give them different names.  
```
cleverness@pop-os:~/Repo 1$ git push -u origin master
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 24 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 1.03 KiB | 1.03 MiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To github.com:ClevernessTech/Repo1.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```

## Centralized VCS (svn)

[Located here on RiouxSVN](https://svn.riouxsvn.com/cisc3140repo2/)


```
 2114  svn checkout --username Cleverness https://svn.riouxsvn.com/cisc3140repo2/
 2115  cd Repo2
 2116  ls
 2117  cd cisc3140repo2/
 2118  ls
 2119  svn up trunk
 2120  svn up
 2121  svn add introduction.py 
 2122  svn update
 2123  svn commit -m "First commit"
```

## Issues with SVN process

This is just my personal issues going through SVN as I never used it before.  First, before actually successfully checking out the repository I had authentication errors when attempting these 3 commands.

```
 2105  svn checkout --depth empty https://riouxsvn.com/repository/?name=cisc3140repo2
 2106  svn checkout --depth empty https://svn.riouxsvn.com/cisc3140repo2
 2111  svn checkout https://svn.riouxsvn.com/cisc3140repo2
```

First was the wrong URL, repo url is different from the management url on this online repository.  2nd and 3rd were Linux related as by default it was attempting to try and authenticate my access to the repos with the username *cleverness*, which is my home username, and the usernames for RiouxSVN are case-sensitive it seems.  Once I specified it correctly with the --username option it gave me access and I didn't have much issues going forward with that method.

Before that, I saw that Github apparently supports subversion...and I hated every attempt at it.  There's a svn-githubsession.log file included if you want to see some of the madness that consumed my mind throughout that process(I omitted some stuff from it).  Maybe if I was already familiar with the svn process I wouldn't have as much trouble as I did, but even trying to delete my local .svn folder and start fresh multiple times, attempting to replicate the steps above I still couldn't get it working.  Googling it, apparently others have noted issues with Githubs implementation, and I don't know exactly how hard Github works at their svn implementation(which possibly isn't alot since it's not their main focus) but majority of my time was trying to get it working on Github before eventually saying forget it and looking for another online alternative.  

## Final Thoughts

Subversion process is interesting, with multiple branches and the ability to lockout the files when in use I can see why in some applications it would be beneficial over git.  Many large projects like Python utilized it exclusively for this reason.  Maybe with more time at it I could find it as comfortable as I find git now.  In some quick researching it's still used alot, OpenHub.net [has a chart showing their breakdown of repository use from data they've collected based on how many of that type are registered with Open Hub.](https://www.openhub.net/repositories/compare)  ![](chart.png)

Almost a quarter of all registered repositories isn't an insignificant number at all, it shows that it's a large part of many peoples workflow.

Will I use it? Uh...maybe.  I'm not ruling it out but I need more practice at it.


