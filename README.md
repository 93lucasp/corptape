# Corptape
Give a look: www.corptape.com
### What is Corptape?
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

### How to update the template (This is a guide so that the client can easily update the template from the code)

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
```<div class="container container--article">```<br> 
You will find <br>```<div class="article__image" style="background-image: url(/assets/images/articles/image.jpg)"></div>``` <br>that code will add to your article an immage, to add it just give to the last word(image.jpg) the name of your image that you added.

If you don't want an image but you prefer a video remove this code <br>
```<div class="article__image" style="background-image: url(/assets/images/articles/image.jpg)"></div>``` <br>
and add the following code: <br>
```<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/KcK0QRT73ag" allowfullscreen></iframe></div>```<br>
And change src with the url of the video.

the file article will be just an example of the classic order of text and images, in the following step I'll explain how to compose an articles with the blocks.
From now you can delete all the code present after the image div and follow the next instructions:

* How to add the title of the article?
```
<h1 class="article__title">
	Here your tile
</h1>
```

* How to add secondary titles in the article?
```
<h2 class="article__title"> 
  Title here
</h2>
```

* How to add an author for the article?
``` 
<div class="article__author">
  <div class="article__author__pic" style="background-image: url(/assets/images/authors/daniele.jpg)"></div>
  <h6 class="article__author__name"> Daniele</h6>
  <h6 class="article__author__category">| Interviste</h6>
  <p class="article__author__date">| 12/06/2017</p>
</div>
```
Add the picture of the author inside the following path ```/assets/images/authors``` and after change the last word of url(daniele.jpg) with the name of your image.

* How to add text?
``` 
<p class="article__text">Your text here...</p>
``` 

* How to add an image secondary?
```
<div class="article__imageSecondary" style="background-image: url(/assets/images/articles/daniele.jpg)"></div>
```
Change again just last words after adding it in the articles folder

* How to make a word with the primary color?
Wrape it inside the following tag:
```
<span class="cl-primary">Your word here</span>
```

* How to make a word bold?
Wrape it inside the following tag:
```
<span class="bold">Your word here</span>
```

* How to add a cit block like that?
![alt text](https://github.com/93lucasp/corptape/blob/master/src/readme-images/cit.png "Cit block")
```
<p class="article__cit">Your text here</p>
```
* How to add link to share the article?
```
<div class="article__share">
  <i class="fa fa-share-alt-square" aria-hidden="true"></i>Share on
  <ul>
    <li>
      <a href="https://www.facebook.com/sharer/sharer.php?u=www.corptape.com">
        <img src="/assets/images/social/facebook.png">
      </a>
    </li>
    <li>
      <a href="https://plus.google.com/share?url=www.corptape.com">
        <img src="/assets/images/social/googleplus.png">
      </a>
    </li>
  </ul>
</div>
```
Change ```www.corptape.com``` with the url of the article

#### List Article (blog page)
##### How to update the list of articles
Go to the file ```blog.html```<br>
Find the div: ```<div class="blog__content">``` inside that find the div <br>
```<div class="col-lg-4">``` so copy all that div from the beginning to the end and past it just before it at the same level. <br>
**To change the image:**<br> ```<div class="articleBox__header" style="background-image: url('/assets/images/articles/blog1.jpg')"></div> ``` <br>
change (blog1) with the name of your image.<br>
**To change the title:**<br> ```<h3 class="articleBox__content__title">text here</h3>``` chanage the text inside that tag.<br>
**To change the description:**<br> ```<p class="articleBox__content__description">description here </p>``` chanage the text inside that tag.<br>
**To change the link where to go:**<br> ``` <a href="/articles/article.html" class="btn btn-primary articleBox__content__button">Leggi di più</a> ``` just change (article.html) with the name of the page.

#### List Interviews (interviews page)
##### How to update the list of the interviews
Go to the file ```interviews.html```<br>
Find the div: ```<div class="interviews__content">``` inside that find the div <br>
```<div class="col-lg-4">``` so copy all that div from the beginning to the end and past it just before it at the same level. <br>
**To change the video:**```<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/NBOb_1T5Bbo?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe> ``` <br>
Change the url before the question mark **?** and leave what is after it. <br>
**To change the title:**<br> ```<h3 class="videoBox__content__title">text here</h3>``` chanage the text inside that tag.<br>









