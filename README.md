# LostThenFound

Release Notes
![image](https://user-images.githubusercontent.com/32021608/116136702-a483a080-a6a0-11eb-93b1-7ce9ea3e2f1a.png)

Release Notes version LostThenFound v2
NEW FEATURES
     Added optimized matching algorithm to match a person's posts with other users' post.
     Added 'Contact Us' Form using Node Mailer module.
     Added restrictions on user account creations (only allow registration of users with @gatech.edu emails)
     Added 'About Us' and 'Community Guidelines' pages.
     User account passwords are hashed using bcrypt.

BUG FIXES
     Successful post creation in "Make a Post" dialog automatically closes the popup and refreshes the posts page.
     Making a new post without a selected image provides a default image to the post.
     Making a new post with an empty field defaults that field to "None".
     
KNOWN BUGS
     Tag's input is improperly labeled as 'Location' in the Filter form.
     A post tag's delete button is a text element that says 'close' rather than an exit icon.
     Emails sent with the 'Contact Us' form do not tell the user that their post successful.
     
     
![image](https://user-images.githubusercontent.com/32021608/116136686-9df52900-a6a0-11eb-91ac-60bc7d42bd5d.png)



Install Information
![image](https://user-images.githubusercontent.com/32021608/116136718-ab121800-a6a0-11eb-98e1-43fc6533e70b.png)

PRE-REQUISITES
       You must have NodeJS 15.14.0 installed and configured before proceeding. 
DEPENDENCIES
       Required dependencies are automatically installed in INSTALLATION step (specified in the project's package.json file) 
DOWNLOAD
       Clone this repository: https://github.com/rohanvarshney/LostThenFound 
BUILD
       No build necessary for this app.  The downloaded LostThenFound reposityory contains all project files.
INSTALLATION
       In terminal, switch to the /LostThenFound/lost-then-found root directory and run the command: npm install
       (automatically installs any dependencies specified in the projects package.json file)
RUNNING APPLICATION
       In the /LostThenFound/lost-then-found directory run the following command: npm run dev 
Troubleshooting
       Error Code: ERRCONNREFUSED
            - Make sure you are only running one instance of npm run dev; the command will fail if there is an instance 
              already running.
      Error Code: Module_not_found
            - Run the command npm install in LostThenFound/lost-then-found to get the projects latest dependencies
            - Run the command npm i <module-name-here> where <module-name-here> is the name of the module not found.

        
              

![image](https://user-images.githubusercontent.com/32021608/116136730-ae0d0880-a6a0-11eb-94ab-5944edb575d4.png)

