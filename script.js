document.addEventListener("DOMContentLoaded", function() {
  // Function to add a new comment to the commentary
  function addComment(commentText) {
      const commentary = document.getElementById("commentary");
      const commentElement = document.createElement("div");
      commentElement.classList.add("comment");
      commentElement.innerText = commentText;
      commentary.appendChild(commentElement);
      // Scroll to bottom
      commentary.scrollTop = commentary.scrollHeight;
  }

  // Dummy data for demonstration
  const dummyComments = [
    "Welcome to the live commentary",
"Match starts now",
"India has won the toss and elected to bat first",
"The openers for India are walking out to the crease",
"First ball bowled by Pakistan's bowler, dot ball",
"Second ball, a single taken by the Indian opener",
"India's score: 1/0",
"Third ball, a quick single again",
"Fourth ball, two runs taken",
"Fifth ball, another dot ball",
"Sixth ball, a boundary, four runs",
"End of the first over, India 8/0",
"Second over starts, first ball, dot",
"Second ball, a wicket, the opener is caught behind",
"India 8/1",
"New batsman walks in",
"Third ball, a single",
"Fourth ball, dot ball",
"Fifth ball, a boundary, four runs",
"Sixth ball, another boundary, four runs",
"End of the second over, India 17/1",
"The third over begins, first ball, dot",
"Second ball, a single",
"Third ball, a big six, over the mid-wicket",
"India 24/1",
"Fourth ball, dot",
"Fifth ball, a single",
"Sixth ball, another single",
"End of the third over, India 26/1",
"Fourth over begins, first ball, dot",
"Second ball, another dot",
"Third ball, a wicket, bowled him",
"India 26/2",
"New batsman at the crease",
"Fourth ball, a single",
"Fifth ball, dot ball",
"Sixth ball, a single",
"End of the fourth over, India 28/2",
"Fifth over starts, first ball, a single",
"Second ball, dot",
"Third ball, a boundary, four runs",
"India 33/2",
"Fourth ball, a single",
"Fifth ball, dot",
"Sixth ball, another single",
"End of the fifth over, India 35/2",
"The game continues with some ups and downs",
"India manages to reach a total of 178/7 in their 20 overs",
"Now it's Pakistan's turn to chase the target",
"First ball of the innings, a dot ball",
"Second ball, a single",
"Pakistan's score: 1/0",
"Third ball, another single",
"Fourth ball, a boundary, four runs",
"Fifth ball, dot",
"Sixth ball, another boundary, four runs",
"End of the first over, Pakistan 10/0",
"The second over begins, first ball, dot",
"Second ball, a wicket, bowled him",
"Pakistan 10/1",
"New batsman walks in",
"Third ball, a single",
"Fourth ball, a big six",
"Pakistan 17/1",
"Fifth ball, dot",
"Sixth ball, another single",
"End of the second over, Pakistan 18/1",
"The third over starts, first ball, dot",
"Second ball, a single",
"Third ball, another single",
"Fourth ball, a boundary, four runs",
"Pakistan 24/1",
"Fifth ball, dot",
"Sixth ball, another single",
"End of the third over, Pakistan 25/1",
"Pakistan continues their chase steadily",
"Despite losing a few wickets, they keep the run rate up",
"Pakistan reaches 181/4 in 18 overs",
"Pakistan wins by 6 wickets with 18 balls left"
      // Add more dummy comments as needed
  ];

  // Simulate live commentary by adding comments at intervals
  let commentIndex = 0;
  const commentInterval = setInterval(() => {
      if (commentIndex < dummyComments.length) {
          addComment(dummyComments[commentIndex]);
          commentIndex++;
      } else {
          clearInterval(commentInterval);
          addComment("End of commentary.");
      }
  }, 2000); // Adjust the interval as needed
});
