# MEAN Lab Solution #2

This second example solution uses a more robust directory structure modeled closely to how Ruby on Rails separates concerns.
It also brings in some added middleware such as `fs` to dynamically load files and directories, `morgan` for more detailed logging 
to the terminal, and `cors` to allow forcross-origin access (not strictly required for this example as it serves its own 
front-end). In this code base, be sure to pay close attention to what each file's `require` and `module.exports` statements. 
