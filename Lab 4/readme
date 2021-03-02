### Jose Soto, CISC3140-MW2 Spring 2021 [Lab 4 Assignment](https://docs.google.com/document/d/1aXlyaP-qCI1c9e49wsBDK_Sz4_2Tu7RLcpRaPJhR-KU/edit)

# SSH and SFTP into a Remote Server

With the rise of cloud and remote computing, needing to connect to remote devices is a pretty common task nowadays.  Whether it's within your network or somewhere distant, utilizing other pieces of hardware is necessary in many types of workflows, and one of the methods to securely connect to these devices is the SSH(Secure Shell) protocol.  

## Prerequisites(Linux)

One great thing about SSH is it's not limited to any particular operating system, the setup process is just different for each.  Writing this from a Linux perspective(on an Ubuntu based distribution), the ability to ssh is normally enabled by default on almost every fresh installation, so there isn't really much setup you have to do to get started!  If you are trying to enable the ability to receive SSH connections that is a different story however, as unless you are given the option during setup the ports aren't open by default, but for the purposes of this task we don't have to worry about that thankfully.

What is important is you secure the credentials needed to connect to this remote server from its administrator.  This can come in the form of a username, and then either a password or public key.  Keys are generally preferred for security reasons, as they are machine generated and depending on how they are generated, VERY hard if not impossible to crack.  Passwords are more convenient for some users/customers to use though, especially if they aren't as tech savvy, so it's up to the administrator to decide which is best.  You can read more about the pros/cons of each [in this article](https://www.thorntech.com/2018/12/passwords-vs-ssh/). For this example we are going to be using a password.

## Actually using SSH
*The actual IP and username for my access to this network has been changed for obvious reasons in this writeup.  School name isn't cause that's easy to find in other repos here*

This is all going to be done in the terminal.  There are many different terminal applications, use whichever you have installed on your machine.  Mine is called Terminal. 

First, if you want to read all the documentation on SSH, you can do so right in the terminal!  Simply typing

```
cleverness@pop-os:~$ man ssh
```

will open the manual and give you some basic information then all the available options you can add to the command.  Press q to exit the manual.

To actually start the SSH session, I want to type out the command like so

```
cleverness@pop-os:~$ ssh clevernesstech@111.111.111.111
```

This specifies I want to use the ssh command, the specified username at that specific IP address.  Your terminal might give some messages about trusting the host if its your first time(hit yes if the IP was entered correctly) and adding it to a known_hosts file.  Depending on the message configured by the administrator, you should see something similar to what's below followed by a password prompt.

```
Access to Brooklyn College computers is restricted to authorized users
        and approved educational and research purposes, only.
 ATTENTION. YOU CAN LOG INTO THIS LINUX WORKSTATION AND OTHER LINUX WORKSTATIONS
 WITH THESE IP ADDRESSES: 111.111.111.111, 111.111.111.111, 111.111.111.111
For questions about the Linux system email me at
removedemail@school.edu
clevernesstech@111.111.111.111's password: 
```

After successfully entering the password, you're logged in!  

Now's a good time to familiarize yourself with the environment you are in with some basic Linux commands(since we are connected to a Linux server).  But let's say you aren't 100% sure you are connected to a Linux server, or want to know what kind of Linux server it is.  That's where the **uname** command comes in.  Executing it will give us some basic system information, and adding a **-a** to it will output everything.  Doing so will show us the following

```
[clevernesstech@sol25 ~]$ uname -a
Linux sol25 3.10.0-1160.11.1.el7.x86_64 #1 SMP Tue Dec 15 08:51:23 CST 2020 x86_64 x86_64 x86_64 GNU/Linux
```

So doing this we see we are definitely in Linux, running actually a slightly older version of the kernel(kernel version 3.10).  Only a few years old but if you were going to try and configure this for newer applications you might not be able to do so.  And i'm not going to post all the outputs but superuser(can think of it as admin) privileges were not working so the system is pretty locked down in that regard.

Let's practice some commands but I'm not gonna go over what everything does since this is more about covering SSH.  Just run **man whoami** etc to get some information on the command if you are not sure what they do.

```
[clevernesstech@sol25 ~]$ whoami
clevernesstech
[clevernesstech@sol25 ~]$ ls
[clevernesstech@sol25 ~]$ pwd
/users1/st/clevernesstech
[clevernesstech@sol25 ~]$ lscpu
Architecture:          x86_64
CPU op-mode(s):        32-bit, 64-bit
Byte Order:            Little Endian
CPU(s):                8
On-line CPU(s) list:   0-7
Thread(s) per core:    2
Core(s) per socket:    4
Socket(s):             1
NUMA node(s):          1
Vendor ID:             GenuineIntel
CPU family:            6
Model:                 158
Model name:            Intel(R) Core(TM) i7-7700 CPU @ 3.60GHz
Stepping:              9
CPU MHz:               999.975
CPU max MHz:           4200.0000
CPU min MHz:           800.0000
BogoMIPS:              7200.00
Virtualization:        VT-x
L1d cache:             32K
L1i cache:             32K
L2 cache:              256K
L3 cache:              8192K
NUMA node0 CPU(s):     0-7
Flags:                 fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe syscall nx pdpe1gb rdtscp lm constant_tsc art arch_perfmon pebs bts rep_good nopl xtopology nonstop_tsc aperfmperf eagerfpu pni pclmulqdq dtes64 monitor ds_cpl vmx smx est tm2 ssse3 sdbg fma cx16 xtpr pdcm pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand lahf_lm abm 3dnowprefetch epb invpcid_single intel_pt ssbd ibrs ibpb stibp tpr_shadow vnmi flexpriority ept vpid fsgsbase tsc_adjust bmi1 hle avx2 smep bmi2 erms invpcid rtm mpx rdseed adx smap clflushopt xsaveopt xsavec xgetbv1 dtherm ida arat pln pts hwp hwp_notify hwp_act_window hwp_epp md_clear spec_ctrl intel_stibp flush_l1d
[clevernesstech@sol25 ~]$ lshw -short
WARNING: you should run this program as super-user.
H/W path      Device      Class          Description
====================================================
                          system         Computer
/0                        bus            Motherboard
/0/0                      memory         16GiB System memory
/0/1                      processor      Intel(R) Core(TM) i7-7700 CPU @ 3.60GHz
/0/100                    bridge         Xeon E3-1200 v6/7th Gen Core Processor Host Bridge/DRAM Reg
/0/100/1                  bridge         Xeon E3-1200 v5/E3-1500 v5/6th Gen Core Processor PCIe Cont
/0/100/1/0                display        Cape Verde PRO / Venus LE / Tropo PRO-L [Radeon HD 8830M / 
/0/100/1/0.1              multimedia     Oland/Hainan/Cape Verde/Pitcairn HDMI Audio [Radeon HD 7000
/0/100/2                  display        HD Graphics 630
/0/100/14                 bus            200 Series/Z370 Chipset Family USB 3.0 xHCI Controller
/0/100/14.2               generic        200 Series PCH Thermal Subsystem
/0/100/15                 generic        200 Series PCH Serial IO I2C Controller #0
/0/100/16                 communication  200 Series PCH CSME HECI #1
/0/100/17                 storage        200 Series PCH SATA controller [AHCI mode]
/0/100/1c                 bridge         200 Series PCH PCI Express Root Port #4
/0/100/1c/0               bridge         XIO2001 PCI Express-to-PCI Bridge
/0/100/1f                 bridge         200 Series PCH LPC Controller (Q270)
/0/100/1f.2               memory         Memory controller
/0/100/1f.3               multimedia     200 Series PCH HD Audio
/0/100/1f.4               bus            200 Series/Z370 Chipset Family SMBus Controller
/0/100/1f.6   enp0s31f6   network        Ethernet Connection (5) I219-LM
/0/2                      system         PnP device PNP0c02
/0/3                      communication  PnP device PNP0501
/0/4                      input          PnP device PNP0303
/0/5                      input          PnP device PNP0f03
/0/6                      system         PnP device PNP0c02
/0/7                      system         PnP device PNP0c02
/0/8                      system         PnP device PNP0b00
/0/9                      generic        PnP device INT3f0d
/0/a                      system         PnP device PNP0c02
/0/b                      system         PnP device PNP0c02
/0/c                      system         PnP device PNP0c02
/0/d                      system         PnP device PNP0c02
/1            virbr0-nic  network        Ethernet interface
/2            virbr0      network        Ethernet interface
WARNING: output may be incomplete or inaccurate, you should run this program as super-user.
[clevernesstech@sol25 ~]$ lshw -html > lshw.html
WARNING: you should run this program as super-user.
WARNING: output may be incomplete or inaccurate, you should run this program as super-user.
[clevernesstech@sol25 ~]$ ls
lshw.html
[clevernesstech@sol25 ~]$ lshw -short > lshw.txt
WARNING: you should run this program as super-user.
WARNING: output may be incomplete or inaccurate, you should run this program as super-user.
[clevernesstech@sol25 ~]$ lsblk
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda      8:0    0 931.5G  0 disk 
├─sda1   8:1    0 915.5G  0 part /
└─sda2   8:2    0    16G  0 part [SWAP]
sr0     11:0    1  1024M  0 rom  
[clevernesstech@sol25 ~]$ lsblk > lsblk.txt
[clevernesstech@sol25 ~]$ man cat
[clevernesstech@sol25 ~]$ cat > hello.txt
Hello, this is being typed from a remote Linux server hosted by Brooklyn College.
Hitting the enter key doesn't close this prompt, only moves to the next line like a normal text editor
Hitting CTRL+D definitely will though.
[clevernesstech@sol25 ~]$ ls
hello  hello.txt  lsblk.txt  lshw.html
[clevernesstech@sol25 ~]$ vi hello.txt
[clevernesstech@sol25 ~]$ uname -a > uname.txt
```

One thing I will talk about since it leads into another topic is the **>** command.  This allows us to take the output of a command, and instead of displaying it in the terminal to save it to a file of our choosing.  I will confirm that all the commands I wanted to save the outputs of did so correctly with the **ls** command to list contents in the current directory I'm in, then after confirming type **exit** to close the SSH session.

```
[clevernesstech@sol25 ~]$ ls
hello.txt  lsblk.txt  lshw.html  lshw.txt  uname.txt
[clevernesstech@sol25 ~]$ exit
logout
Connection to 111.111.111.111 closed.
```

And that's it! We were able to successfully SSH and run commands off a remote device.  You could repeat this step each time, but there's something we could do to make the process a bit easier.

## SSH Config File

Rather than having to always remember the username and ip address of where we are connecting, we have the ability to save these credentials in a config file.  On my system this is saved in the **~/.ssh/** folder in the home directory, but if you forget or aren't sure, again check the manual!  Under the Files section when running **man ssh** you'll see. 

```
~/.ssh/config
             This is the per-user configuration file.  The file format and configuration options are described in ssh_config(5).  Because of the potential for abuse, this file must have
             strict permissions: read/write for the user, and not writable by others.  It may be group-writable provided that the group in question contains only the user.

```

And taking it's advice, you can run **man ssh_config** it'll give every single config option we have for this config file.  So again if you ever forget what a program can do or what options it has, just read the manual.

Now when it comes to the ~/.ssh/ folder, if you've run the ssh command before this automatically gets created, so for those following along it will already be there.  From the terminal you want to then run the following 2 commands  

```
touch ~/.ssh/config
chmod 600 ~/.ssh/config
```

**touch** will just create a blank file called config here, and **chmod** will change the files permissions so only the user executing the command can read or write to the file.  Great for security since it stores sensitive information.  Inside the config file we want to put something similar to the following

```
Host BC1
    HostName 111.111.111.111
    User clevernesstech
    LogLevel INFO
    
Host BC2
    HostName 111.111.111.111
    User clevernesstech
    Port 24
    IdentityFile ~/.ssh/BC2_key.pem
    LogLevel INFO
    
Host *
    User root
    Compression yes
    LogLevel INFO
```

The first part essentially creates a host or alias i'm calling BC1 that stores the IP and user information of the connection we've used already.  BC2 is an example of what the config would look like if we were using a public key to connect as well as a non-standard port.  Default port for SSH is 22, but sometimes administrators will use different ones to lessen the amount of bots that attempt to bruteforce connections through SSH(which happens millions of times a day around the world).  The IdentityFile refers to a public key you would be supplied to log in with instead of a password as mentioned earlier, so if you get one make sure to apply the same permissions to it that you did for the config file for security reasons!

The last Host entry is just a wild-card one if you don't specify a specific host, if you don't specify a username during SSH it'll attempt the SSH connection as root.  The order here does matter by the way!  That should be at the bottom.

## SFTP - Secure File Transfer Protocol

To put this new host information to the test, we can try out SFTP aka the Secure File Transfer Protocol.  It's our way of transferring files in and out of devices we have SSH access too, securely!  Instead of using the ssh command, we use sftp instead. 


```
cleverness@pop-os:~/CISC 3140/Lab 4$ sftp BC1
Access to Brooklyn College computers is restricted to authorized users
        and approved educational and research purposes, only.
 ATTENTION. YOU CAN LOG INTO THIS LINUX WORKSTATION AND OTHER LINUX WORKSTATIONS
 WITH THESE IP ADDRESSES: 111.111.111.111,111.111.111.111,111.111.111.111
For questions about the Linux system email me at
removedemail@school.edu
clevernesstech@111.111.111.111's password: 
```

So we see here instead of the long username and ip address, now we can just type BC1 and we see at the password prompt we provided the same username and password as before.  Saves alot of headache, especially if you connect to multiple devices throughout the course of the day.  

Once we connect we can execute many of the same commands we can during ssh, but with 2 more important ones; **get** and **put**.  They are pretty self explanatory, **get** lets us grab files from this remote ssh location, defaulting to the current directory.  It will also by default place them in our current local directory as shown below, but we can specify any remote and local-path we want when doing this.  I just launched the terminal from the directory I wanted them to go in already so it's not necessary in this case.  Then **put** obviously does the reverse, grab a local file to put in the remote location.  More information on get and put, along with their options, can be found in the sftp manual by doing **man sftp** in the terminal.


```
Connected to BC1.
sftp> ls
hello.txt  lsblk.txt  lshw.html  lshw.txt   uname.txt  
sftp> get hello.txt
Fetching /users1/st/clevernesstech/hello.txt to hello.txt
/users1/st/clevernesstech/hello.txt                                             100%  223    16.2KB/s   00:00    
sftp> get ls
lsblk.txt  lshw.html  lshw.txt   
sftp> get lsblk.txt
Fetching /users1/st/clevernesstech/lsblk.txt to lsblk.txt
/users1/st/clevernesstech/lsblk.txt                                             100%  195    13.5KB/s   00:00    
sftp> get lshw.html
Fetching /users1/st/clevernesstech/lshw.html to lshw.html
/users1/st/clevernesstech/lshw.html                                             100%   51KB   2.1MB/s   00:00    
sftp> get lshw.txt
Fetching /users1/st/clevernesstech/lshw.txt to lshw.txt
/users1/st/clevernesstech/lshw.txt                                              100% 2623   182.3KB/s   00:00    
sftp> get uname.txt
Fetching /users1/st/clevernesstech/uname.txt to uname.txt
/users1/st/clevernesstech/uname.txt                                             100%  107     7.2KB/s   00:00    
sftp> exit
cleverness@pop-os:~/CISC 3140/Lab 4$ ls
hello.txt  lsblk.txt  lshw.html  lshw.txt  uname.txt
```

So here I copied all 5 files I had stored remotely, and after exiting and running ls it shows them all stored locally in my Lab 4 folder.  You should see them uploaded into this repo as well, can open them to confirm the contents match what was entered in the command line.

## Conclusion

SSH and SFTP are important tools you'll need if you want to connect and interact with remote computers/servers.  There are clients/software that will handle many of the same tasks that we covered over command line, but they essentially perform them behind a GUI that some users might find easier to work with.  Use whats best for you and your workflow, but knowing how it works from a command line perspective will help at some point in the future if you ever have to troubleshoot any problems you may encounter with them.  Because after all, if you don't know how it works, how can you be certain the software behavior you are experiencing is wrong?







