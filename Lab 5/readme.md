The script will allow the passing of 1 word or year, then compiles the MoviesGenre java file and saves the output into a text file.

Then using awk, the text file is quieried.  So running

```
./script.sh Comedy
```

Will run the script, save Comedy as the parameter in name parameter(as its the first and only parameter passed in, its $1) then run an if statement.  If no argument is passed, it will fail and exit.  If it does, it runs the awk command against the movies_list.txt and saves the output as result.Comedy.txt, or the name of whatever argument you passed in.
