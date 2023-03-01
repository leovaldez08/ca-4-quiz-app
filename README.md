![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

### CA - 4: More Quiz


### Part 1:
You are asked to create a quiz app using functional components (have to use `hooks` for state-management).
There are few functionalities - that you need to achieve ->

1. An option through which one can toggle between `dark` and `light` mode.
2. Once you answer a particular question -> you should be able to move to the next question automatically - until you reach the last question. (You cannot attempt a question twice -> so no need for a functionality which can lead you back to the previous question.)
3. Once you answer the final question -> a result screen should pop-up --> displaying your result.

#### Steps to follow:

1. The structure of the project is already provided to you. You just need to clone this repository and run the following command: `npm i` or `npm install`.
2. The set of questions is also provided to you inside `questions.js` file. 
   **NOTE:** Inside `questions.js` -> there are total of 5 questions, out of which only the first question is complete. You need to complete the other questions by filling-in the values for `isCorrect` field.
3. There are two functional components: 
   1. QuestionBox.js -> you have to implement the following features inside this component:
       1. `Question: 2 out of 5` ( if you are at the first question -> where 2 is coming from your current question number, and 5 is coming from the total number of questions.)
       2. Question description
       3. 4 Options for the above question

    You can take the below picture as reference:

    ![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/ca-4-react-quiz.png)

  2. Result.js -> Once the user have attempted all the questions, he/she should get his/her score in percentage.
     You can take the below picture as reference:

     ![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/ca-4-react-final.png)

**NOTE:** when you click on the button which changes toggles between dark and light mode -> the inner text of the button should also change -> ie: if the background is `dark` -> then `light` should be written on the button, else the vice-versa. You can see all the required functionalities working in the below given gif:

#### Demo:

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/ca-4-react-quiz-section-one.gif)

### Part2: More to come:

Once all the above mentioned functionalities are achieved -> then create two buttons named as 
1. Highlight: which upon clicking should highlight the `question text` -> by highlight we mean that -> the color of the question text should change to `red`.
2. Remove Highlight: which upon clicking should remove the red color and go back to the color which was used earlier -> in the above eg case -> the color should come back to dark blue color.

You can see the working demo below in the gif:

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/ca-4-react-quiz-section.gif)

Happy Coding ❤️!
