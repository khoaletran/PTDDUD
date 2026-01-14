const poll = {
      question: "What is your favourite programming language?",
      options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
      answers: new Array(4).fill(0),

      registerNewAnswer() {
        const input = Number(
          prompt(
            `${this.question}\n${this.options.join('\n')}\n(Write option number)`
          )
        );

        if (
          Number.isInteger(input) &&
          input >= 0 &&
          input < this.answers.length
        ) {
          this.answers[input]++;
        }

        this.displayResults();
        this.displayResults('string');
      },

      displayResults(type = 'array') {
        if (type === 'array') {
          console.log(this.answers);
        } else if (type === 'string') {
          console.log(`Poll results are ${this.answers.join(', ')}`);
        }
      },
    };

    document
      .querySelector('.poll')
      .addEventListener('click', poll.registerNewAnswer.bind(poll));
      
  (function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.body.addEventListener('click', function () {
      header.style.color = 'blue';
    });
  })();
