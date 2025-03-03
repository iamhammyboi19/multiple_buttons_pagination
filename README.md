# MULTIPLE BUTTON PAGINATION

![Alt Text](https://raw.githubusercontent.com/iamhammyboi19/multiple_buttons_pagination/master/public/pagination-1.png)

**This explains the logic behind the file `(./src/utils/pagination.js)` that generates an array which I use to render my multiple pagination buttons in the frontend as show in the image above**

> For example the returned array for the image above looks like this `[1, ..., 3, 4, 5, 6, ..., 50]`

#### Now let me explain what is happening. RUN THIS CODE TEST IT AND READ THIS TO FOLLOW UP TO TEST RUN. CHANGE THE CONDITIONS TO CONFIRM IT WILL WORK DIFFERENTLY TO UNDERSTAND ESPECIALLY THE RANGE PART

> [!NOTE]
> The data used for pagination is from mockaroo.com and it is in `(./src/utils/MOCK_DATA.json)`
> The function in `(./src/utils/pagination.js)` only takes the `current_page` and `total_page` arguments
> The function is just about filling up the array based on the conditions met, after reading each line check the code to understand

- Define a `RANGE` variable this mean how many numbers you want to show before and after the `current_page`
  `RANGE = 2`
- Create an empty array `[]` inside the function

- By default add 1 ie the first page to the array (this means the first page would always be in the paginations)
  `array.push(1)`

- Now to skip or show numbers after 1 the condition here is that the current_page is greater than 4 ie
  I can navigate and see 1, 2, 3, 4 if the current_page is within this `RANGE`
  You can actually put any number you want in this condition it is a matter of preference
  `if (current_page > RANGE + 2)` `array.push("...")` this is the left "..." in line 7 meaning start skipping some numbers
- Now this place is not hard just follow it step by step it is just `for loop` that have a `start`, `end` and `i++` values this is what determine what would be in the middle of the pagination
  the start is `let i = Math.max(2, cur_page - RANGE);` this means you want to start from 2 or any number greater than 2 because first page will always be there no matter what current_page you are, so any number after first_page has to meet this condition.

```
if current page is 1 ie it is between 2 and 1 - 2(RANGE) which is Max(2, -1) pick 2
if current page is 2 ie it is between 2 and 2 - 2(RANGE) which is Max(2, 0) pick 2
if current page is 3 ie it is between 2 and 3 - 2(RANGE) which is Max(2, 1) pick 2
if current page is 4 ie it is between 2 and 4 - 2(RANGE) which is Max(2, 2) pick 2
if current page is 5 ie it is between 2 and 5 - 2(RANGE) which is Max(2, 3) pick 3
```

The whole story about the start range is because you still it to show you 2(ie RANGE) numbers previous to the current page imagine this scenario where `let i = Math.max(2, cur_page);` instead of `cur_page - RANGE`

```
if current page is 1 ie it is between 2 and 1 which is Max(2, 1) pick 2
if current page is 2 ie it is between 2 and 2 which is Max(2, 2) pick 2
if current page is 3 ie it is between 2 and 3 which is Max(2, 3) pick 3
if current page is 4 ie it is between 2 and 4 which is Max(2, 4) pick 4
if current page is 5 ie it is between 2 and 5 which is Max(2, 5) pick 5
```

![Alt Text](https://raw.githubusercontent.com/iamhammyboi19/multiple_buttons_pagination/master/public/pagination-2.png)

so if I start the for loop from any `current_page > 2 eg lets say current_page=5` check image above I won't have any chance to navigate back to 3 and 4 like I can do in the first picture on line 3

Now lets talk about the end of the loop ie `i <= Math.min(total_page, cur_page + RANGE);`
this is giving the range to start from `3 if current_page is 5 and end at 7` since `5 + 2 = 7` ie `i <= 7`

Now this proves the `RANGE` works as explained in line 16 just a number that decides what range of paginations are shown before and after the current_page

- Now check for `if (current_page < total_page - (RANGE + 1))` this means always display the last 3 numbers till the total_page if `current_page` is `total_page - 3` no need to skip them with the right `"..."`

- Finally if total_page is greater than 1 add it as the array last element

> [!NOTE]
> The goal here is adding elements to an array based on 5 conditions and hopefully this doesn't confuse you further
> The most important thing here is add 1 to the array by default
> Start skipping "..." numbers closest to 1 after the current page is more than page 4 (this is also because the for loop starts skipping numbers greater 2 whenever the current page is 5) so show this with "..."
> Now show the middle numbers this numbers mean two numbers before and current numbers ie (the RANGE which user can paginate before and after the current page)
> Now skip the last page numbers as long as the current_page is less than the last 3 numbers
> Then finally add the total_page number to the array as last and final pagination number this one too is needed just like the very first number (1)
