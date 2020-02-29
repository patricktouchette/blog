---
title: "VS Code Markdown Snippets for a Gatsby Blog"
slug: "vs-code-markdown-snippets-for-gatsby-blog"
author: "Patrick Touchette"
date: "2020-02-29"
category: ["code"]
tags: ["gatsby", "vscode"]
---

A snippet in VS code is used to autofill code for you directly in the editor as you type keywords.

## Why

A repetitive task that always comes up when writing a blog post in markdown is to set the frontmatter, aka the post metadata.

Here is how I configred my snippet.

## Configuring the snippet

In Visual Studio Code, start by going to `File > Preferences > User Snippets`.

Then type `markdown.json` in the search bar or simply scroll to select markdown. Press enter and this will open up a file named `markdown.json`. Add the following code to this file. Edit as needed for your own metadata.

<div class="filename">markdown.json</div>

```json
{
  "Frontmatter": {
    "prefix": "frontmatter",
    "body": [
      "---",
      "title: \"$1\"",
      "slug: \"$2\"",
      "author: \"Patrick Touchette\"",
      "date: \"2020-$5-$6\"",
      "category: [\"code\"]",
      "tags: [\"$3\", \"$4\"]",
      "---"
    ],
    "description": "Generates the frontmatter for a blog post"
  }
}
```

Now this won't work out of the box, to get the snippet to show up, start by typing "frontmatter" in your markdown file, then press `ctrl + space`.

To make the suggestion pop up automatically, add this to your vs code settings file.

Go to `File > Preferences > Settings`, then click open JSON in the top right.
Or open the commande palette `ctrl + shift + p` and type `Preferences: Open Settings (JSON)`.

Add this to your settings.json file.

<div class="filename">settings.json</div>

```json
...
"[markdown]": {
    "editor.quickSuggestions": true,
    "editor.wordBasedSuggestions": false
}
```

Another useful snippet is to add custom html elements inside your markdown. I use this to add a filename over code blocks.

<div class="filename">markdown.json</div>

````json
...
	"filename": {
		"prefix": "filename",
		"body": [
			"<div class=\"filename\">$1</div>",
			"```${2:language}",
			"$3",
			"```"
		],
		"description": "Creates a code block with filename"
	}
}
````
