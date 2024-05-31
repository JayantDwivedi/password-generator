This is the new password generator. 

Here are the simple steps to use the password generator. 

- Install package from npm.

```
npm i jd-password-generator
```
- Use the code snippet given below. 
```
import {generatePassword} from "jd-password-generator";

// here 20 is the length of the password or you can give your own length.
const passwordString = generatePassword(20);

console.log("Generating password",passwordString);
```
