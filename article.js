
/* THE CURIOUS JOURNAL — Article page
   Part 1: Story data and setup */

(() => {
  "use strict";

  const stories = [
    {
      id: 1,
      title: "The Quiet Art of Paying Attention",
      category: "Slow Living",
      date: "2026-10-12",
      read: "5 min read",
      excerpt: "A small invitation to notice the details that make an ordinary day feel extraordinary.",
      colors: ["#ead9c4", "#bd765d", "#71816c"],
      sections: [
        ["Start with what is here", "Attention helps ordinary details come into focus: changing light on a wall, the sound of a kettle, or the familiar look of a street after rain."],
        ["A practice, not a performance", "You do not need a perfect routine. Try noticing one thing on a walk that you would usually pass without a thought. Let that small discovery be enough."],
        ["Leave a little room", "A pause between tasks, a meal without a screen, or a few quiet minutes outside can make room for details to arrive. Attention grows through gentle repetition."]
      ]
    },
    {
      id: 2,
      title: "Making Space for Better Ideas",
      category: "Creativity",
      date: "2026-10-08",
      read: "4 min read",
      excerpt: "Why a little breathing room can help your most interesting thoughts find their way in.",
      colors: ["#e8d9cb", "#b65d45", "#71816c"],
      sections: [
        ["Ideas need a little air", "Useful ideas sometimes appear when we stop forcing them: during a walk, while tidying a desk, or in the quiet gap between tasks."],
        ["Make a welcoming space", "Keep a page for unfinished thoughts. Allow a first draft to be imperfect. These small habits make it easier to return to an idea."],
        ["Follow the interesting thread", "When something sparks your curiosity, give it a little attention. Small experiments often teach more than waiting for a perfect plan."]
      ]
    },
    {
      id: 3,
      title: "A More Human Kind of Technology",
      category: "Technology",
      date: "2026-10-03",
      read: "6 min read",
      excerpt: "Looking beyond the latest features to ask how our tools can better serve real life.",
      colors: ["#dce2d5", "#657b68", "#d7b18b"],
      sections: [
        ["Tools should serve people", "A useful technology should help people do something meaningful with less friction, not simply add more features."],
        ["Choose with intention", "Before adding an app or device to your routine, consider the problem it is meant to solve and whether it genuinely helps."],
        ["Keep people in the picture", "Thoughtful technology supports relationships, learning, and creative work while leaving people in control."]
      ]
    },
    {
      id: 4,
      title: "Objects That Hold Our Stories",
      category: "Culture",
      date: "2026-09-28",
      read: "5 min read",
      excerpt: "The everyday things we keep can become reminders of people, places, and time.",
      colors: ["#e8d8c5", "#c18a5e", "#8c5946"],
      sections: [
        ["More than a thing", "A ticket tucked inside a book or a chipped mug can carry a story much larger than its physical size."],
        ["The meaning we give", "Not every keepsake needs to be old or valuable. Sometimes an ordinary object reminds us of a conversation or a person."],
        ["Keep the story", "We can honour memories without keeping everything. Choose a few things that genuinely matter and leave room for new experiences."]
      ]
    },
    {
      id: 5,
      title: "The Joy of Starting Small",
      category: "Creativity",
      date: "2026-09-22",
      read: "3 min read",
      excerpt: "Big ambitions are easier to approach when we give them a tiny first step.",
      colors: ["#e6dfcf", "#d18463", "#687d67"],
      sections: [
        ["Make the first step smaller", "Reduce a large project to one action you can do today: open a blank document, sketch a shape, or write a question."],
        ["Build a little evidence", "Small actions make progress visible and replace the vague idea that you cannot begin with the experience of having begun."],
        ["Let momentum be gentle", "Consistency does not require perfection. Return to the next small step and let the project grow at a human pace."]
      ]
    },
    {
      id: 6,
      title: "Can We Make the Internet Feel Smaller?",
      category: "Technology",
      date: "2026-09-16",
      read: "7 min read",
      excerpt: "Finding calmer corners of the web and building a more intentional digital routine.",
      colors: ["#d8e0db", "#6d8c82", "#c4785e"],
      sections: [
        ["A very large place", "The internet can make everything feel urgent and endless. A calmer experience begins by deciding what you want to find."],
        ["Create your own corners", "Follow sources that teach you something, keep a short list of sites you enjoy, and remove notifications that do not help."],
        ["Use the web, then return", "The goal is a more intentional relationship with online spaces, leaving time for the offline world that gives ideas their meaning."]
      ]
    },
    {
      id: 7,
      title: "A Field Guide to Unhurried Mornings",
      category: "Slow Living",
      date: "2026-09-09",
      read: "4 min read",
      excerpt: "There is no perfect morning routine, only small rituals that make a day feel like yours.",
      colors: ["#eddfc9", "#bd8e5c", "#8d9a7d"],
      sections: [
        ["There is no universal morning", "A good morning does not have to look the same for everyone. Your schedule and circumstances matter."],
        ["Choose one small anchor", "A few minutes by a window or preparing what you need for the day can provide a gentle starting point."],
        ["Make room for real life", "Some mornings will be hurried. A routine should support your day, not become another reason to feel behind."]
      ]
    },
    {
      id: 8,
      title: "Why Independent Magazines Still Matter",
      category: "Culture",
      date: "2026-09-02",
      read: "6 min read",
      excerpt: "Thoughtful publishing makes room for ideas with a longer life.",
      colors: ["#e6d9d0", "#a75d4a", "#74836d"],
      sections: [
        ["A different pace", "Independent magazines can give a subject room to breathe instead of chasing every update."],
        ["A point of view with care", "Smaller publications can grow from a clear editorial curiosity and connect readers who want depth."],
        ["Readers are part of the story", "Thoughtful publishing depends on people who read, share, discuss, and support good work."]
      ]
    },
    {
      id: 9,
      title: "Collecting Moments, Not Milestones",
      category: "Slow Living",
      date: "2026-08-26",
      read: "4 min read",
      excerpt: "A reminder that life is also made of small, unannounced moments.",
      colors: ["#e6dfcf", "#d49c76", "#72816a"],
      sections: [
        ["The days between the big days", "Much of life happens between milestones: ordinary conversations, familiar routes, and quiet acts of care."],
        ["Notice without measuring", "You do not need to turn every moment into a photograph or a productivity lesson. Sometimes noticing is enough."],
        ["A personal collection", "The moments that make a week feel like yours may be small, but together they form a rich record of life."]
      ]
    },
    {
      id: 10,
      title: "The Creative Value of Being a Beginner",
      category: "Creativity",
      date: "2026-08-19",
      read: "5 min read",
      excerpt: "Starting from zero can be freeing: curiosity gets to lead before perfection does.",
      colors: ["#e7d7c5", "#bf7153", "#778b7c"],
      sections: [
        ["Permission to be new", "Beginners can ask basic questions and try approaches without defending an established method."],
        ["Make experiments, not verdicts", "A first attempt is information. It shows what you enjoy, what needs practice, and what to try next."],
        ["Stay curious as you improve", "Experience is valuable, but a willingness to explore keeps unfamiliar ideas within reach."]
      ]
    },
    {
      id: 11,
      title: "Designing a More Thoughtful Digital Day",
      category: "Technology",
      date: "2026-08-12",
      read: "5 min read",
      excerpt: "Small choices about notifications and attention can change how technology feels.",
      colors: ["#dce2d5", "#6f8875", "#c67d5d"],
      sections: [
        ["Notice what interrupts you", "Pay attention to which alerts are useful and which simply pull you away from what you are doing."],
        ["Make useful defaults", "Silence nonessential notifications and decide when to check messages. A few thoughtful defaults reduce repeated decisions."],
        ["Review, do not rigidly rule", "Your needs change. Keep the settings that help you and revise the rest."]
      ]
    },
    {
      id: 12,
      title: "The Places That Change How We Think",
      category: "Culture",
      date: "2026-08-05",
      read: "6 min read",
      excerpt: "Our surroundings quietly shape our ideas, from a library corner to a busy market.",
      colors: ["#eadcc9", "#b77855", "#697d68"],
      sections: [
        ["Places set a tone", "A quiet library, a lively market, or a familiar park each invites a different kind of attention."],
        ["Change the scene gently", "A short walk or a change of workspace may offer a fresh perspective when a problem feels stuck."],
        ["Find places that welcome thought", "Notice where you feel comfortable being curious. These places can become useful companions to thinking."]
      ]
    }
  ];

  const content = document.getElementById("articleContent");
  const related = document.getElementById("relatedStories");
  const statusMessage = message => {
    const status = document.getElementById("articleStatus");
    if (status) status.textContent = message;
  };

  const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#39;"
  }[char]));

  const niceDate = value => new Date(value + "T12:00:00")
    .toLocaleDateString("en", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });

  const visualStyle = story =>
    `--cover:${story.colors[0]};--shape-one:${story.colors[1]};--shape-two:${story.colors[2]}`;

  const storyId = Number(new URLSearchParams(location.search).get("id"));
  const story = stories.find(item => item.id === storyId);

  /* Part 2 will render the story and connect the controls. */


  if (story && content) {
    document.title = story.title + " | The Curious Journal";

    const description = document.querySelector(
      'meta[name="description"]'
    );

    if (description) {
      description.content = story.excerpt;
    }

    const sectionsHTML = story.sections.map((section, index) => {
      const heading = escapeHTML(section[0]);
      const paragraph = escapeHTML(section[1]);

      const quote = index === 0
        ? '<blockquote>“Curiosity begins when we make room to notice.”</blockquote>'
        : "";

      return `<h2>${heading}</h2><p>${paragraph}</p>${quote}`;
    }).join("");

    content.innerHTML = `
      <header class="article-hero">
        <span class="article-category">
          ${escapeHTML(story.category)}
        </span>

        <h1 class="article-title">
          ${escapeHTML(story.title)}
        </h1>

        <p class="article-excerpt">
          ${escapeHTML(story.excerpt)}
        </p>

        <div class="article-byline">
          <span>By <strong>The Curious Journal team</strong></span>
          <span>·</span>
          <time datetime="${story.date}">
            ${niceDate(story.date)}
          </time>
          <span>·</span>
          <span>${escapeHTML(story.read)}</span>
        </div>
      </header>

      <div
        class="article-cover"
        style="${visualStyle(story)}"
        role="img"
        aria-label="Abstract artwork for ${escapeHTML(story.title)}"
      >
        <span>stay curious</span>
      </div>

      <div class="article-toolbar">
        <span>A MOMENT TO THINK</span>

        <div class="article-buttons">
          <button class="article-action" id="shareStory" type="button">
            Share ↗
          </button>

          <button class="article-action" id="copyStoryLink" type="button">
            Copy link
          </button>
        </div>
      </div>

      <div class="article-body">
        <p>${escapeHTML(story.excerpt)}</p>

        <p>
          Welcome to The Curious Journal, an independent magazine-style
          project about creativity, culture, technology, and everyday life.
          This feature explores one idea through a few practical reflections.
        </p>

        ${sectionsHTML}

        <p class="article-note">
          <strong>A small prompt:</strong>
          What is one idea from this story you would like to carry into
          your week? Write it down, discuss it, or simply keep it in mind.
        </p>
      </div>

      <div class="article-toolbar">
        <span>THANK YOU FOR READING</span>

        <button class="article-action" id="shareStoryBottom" type="button">
          Share story ↗
        </button>
      </div>

      <p id="articleStatus" class="article-status" role="status"
         aria-live="polite"></p>
    `;

    // Show three other stories, preferring the same category.
    const recommendations = stories
      .filter(item => item.id !== story.id)
      .sort((a, b) =>
        Number(b.category === story.category) -
        Number(a.category === story.category)
      )
      .slice(0, 3);

    recommendations.forEach(item => {
      const card = document.createElement("a");
      card.className = "related-card";
      card.href = "article.html?id=" + item.id;

      card.innerHTML = `
        <span class="related-art" style="${visualStyle(item)}"
              aria-hidden="true">
          <span>cj.</span>
        </span>

        <small>${escapeHTML(item.category)}</small>

        <h3>${escapeHTML(item.title)}</h3>

        <p>${escapeHTML(item.excerpt)}</p>
      `;

      related.appendChild(card);
    });

    // Copy the current article address.
    async function copyStoryLink() {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(location.href);
        } else {
          const field = document.createElement("textarea");
          field.value = location.href;
          field.style.position = "fixed";
          field.style.left = "-9999px";
          document.body.appendChild(field);
          field.select();

          const copied = document.execCommand("copy");
          field.remove();

          if (!copied) throw new Error("Copy unavailable");
        }

        statusMessage("Story link copied!");
      } catch (error) {
        statusMessage(
          "Copy is unavailable here. Copy the page address from your browser."
        );
      }
    }

    // Use the device's sharing menu when supported.
    async function shareStory() {
      if (navigator.share) {
        try {
          await navigator.share({
            title: story.title,
            text: story.excerpt,
            url: location.href
          });
        } catch (error) {
          if (error.name !== "AbortError") {
            statusMessage("Sharing failed. Try Copy link instead.");
          }
        }
      } else {
        await copyStoryLink();
      }
    }

    document.getElementById("copyStoryLink")
      .addEventListener("click", copyStoryLink);

    document.getElementById("shareStory")
      .addEventListener("click", shareStory);

    document.getElementById("shareStoryBottom")
      .addEventListener("click", shareStory);

  } else if (content) {
    // A missing or invalid story ID gets a helpful page.
    document.title = "Story not found | The Curious Journal";

    content.innerHTML = `
      <div class="article-hero">
        <span class="article-category">THE READING ROOM</span>

        <h1 class="article-title">This story wandered off.</h1>

        <p class="article-excerpt">
          We couldn't find that article. Try browsing all stories instead.
        </p>

        <p style="margin-top:28px">
          <a class="article-back-button" href="blog.html">
            Browse all stories →
          </a>
        </p>
      </div>
    `;
  }

  // Mobile navigation.
  const menuButton = document.getElementById("articleMenuButton");
  const navigation = document.getElementById("articleNavigation");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen =
        menuButton.getAttribute("aria-expanded") === "true";

      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.textContent = isOpen ? "Menu ☰" : "Close ✕";
      navigation.classList.toggle("is-open", !isOpen);
    });

    navigation.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "Menu ☰";
        navigation.classList.remove("is-open");
      });
    });
  }

  // Automatically update the copyright year.
  const year = document.getElementById("articleYear");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

})();
