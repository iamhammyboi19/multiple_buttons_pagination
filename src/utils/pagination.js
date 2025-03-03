const RANGE = 2; // number of pages to show after showing the current page

// prev_btn(<) 1 ... middle_range ... total_page next_btn(>) -- (< 1 ... middle_range ... total_page >)
// 1 and the total_page will always show in all paginations ie where it starts and ends
// prev_btn and next_btn too will always show in all paginations
// the "..." after 1 will show whenever the numbers closest to 1 are out of range (this is based on how far you want it)
// the "..." before total_page will always show whenever the last three numbers are not in range (this is also based on how far you want it)

export default function get_pagination_list(current_page, total_page) {
  const all_available_pages = [];

  const cur_page = Number(current_page);

  //   since 1 shows by default add it to the list
  all_available_pages.push(1);

  // now I want to show 2 and 3 after 1 by default
  // this condition means if the current page is less than 5 show all numbers less than it
  // if not the skip them using "..."
  if (current_page > RANGE + 2) {
    all_available_pages.push("...");
  }

  // now we have to work on dynamically generating the middle_range numbers
  // this will iterate from 2 or any number larger than 2 and stop at total_page - 1 or any number less than it
  // this is because by default showing 1 and the total_page pagination number is not optional
  /*
if we are in current_page (1) for example and total page is (10)
the condition (current_page > RANGE + 2) is not valid so we can show all numbers less than (5) immediately after (1) pagination
so the iteration starts from 2 since it is bigger than -1 and stops at 3 since we are using range of 2 numbers after showing the current page
current_page (1) + RANGE (2) is (3)
(< 1 2 3 ... 10 >) the frontend UI looks like this
// - RANGE
// , cur_page + RANGE
in this case 2 and 3 is the middle range based on the current number
  */
  for (
    let i = Math.max(2, cur_page - RANGE);
    i <= Math.min(total_page, cur_page + RANGE);
    i++
  ) {
    // i <= total_page means i can be total_page and I am pushing total page to the array
    // in line 58 so I don't want to do it twice
    if (i !== total_page) {
      all_available_pages.push(i);
    }
  }

  // now check if you need to show the last 3 numbers till total page or just "..." ie 7,8,9,10
  //   why it is last 3 is because the (RANGE + 1 = 3) ie any current_page less than 7 means they do not have option to click all 3 numbers yet
  if (current_page < total_page - (RANGE + 1)) {
    all_available_pages.push("...");
  }

  // lastly add the total_page number to the array
  // check if total_page is greater than 1
  if (total_page > 1) {
    all_available_pages.push(total_page);
  }

  return all_available_pages;
}
