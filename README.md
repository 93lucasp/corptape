# Corptape

### What is it?
Corptape is a magazine about startup, tech and digital.

### Technologies
* HTML5
* Handlebars
* CSS3
* Sass
* Bootstrap 4
* JavaScript
* jQuery
* Gulp

### How to update the template (for the client)

#### Article

##### How to create a new page
To create a new page go inside the articles folder and create a new file (nameArticle.html).
Once created, copy all the code inside the file article.html and paste it inside your new file(nameArticle.html)

##### SEO
In the beginning you will see the head tag and inside many meta tag. If you want to improve the seo for that article you can change the follow meta tag:
* ```<title>Corptape</title>```
In the title tag you could update it like that ```<title>Corptape | Title article</title>```

* ```<meta name="description" content="Rivista startup, tech e digital, raccontiamo le storie di startup e aziende attroverso video-interviste dedicate" />```
Here you could update the content with the description of the article.

* ``` <meta name="keywords" content="Rivista, magazine, startup, early stage, tech, digital, story, storie di startup, aziende, company, video-interviste, video, rivista startup " /> ```
Here you should add to the actually words the keywords about the article.

* ``` <meta property="og:url" content="http://www.corptape.com/" /> ```
Here change the content adding the url of the article.

* ```<meta property="og:title" content="Corptape" />```
Here change the content adding the title of the article.

* ```<meta property="og:description" content="Rivista startup, tech e digital. Raccontiamo le storie di startup e aziende attroverso video-interviste dedicate" />```
Here change the content adding the description of the article.

* ```<meta property="og:image" content="" />```
Here add in the content the path of the image of the article.

##### Where to add images
All the images about an article MUST to be inside the following folder: ```/assets/images/articles```.

##### Content article
Inside the following div 
```<div class="container container--article">``` 
You will find ```<div class="article__image" style="background-image: url(/assets/images/articles/image.jpg)"></div>``` that code will add to your article an immage, to add it just give to the last word(image.jpg) the name of your image that you added.

If you don't want an image but you prefer a video remove this code <br>
```<div class="article__image" style="background-image: url(/assets/images/articles/image.jpg)"></div>``` <br>
and add the following code: <br>
```<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/KcK0QRT73ag" allowfullscreen></iframe></div>```<br>
And change src with the url of the video.

the file article will be just an example in the follow step I'll explain how to compose an articles with the blocks.

If you





