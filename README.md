# Project: Build Tetris with modern JavaScript
## UPDATE

I have deployed my Tetris implementation using AWS serverless static web content hosting. I own the domain [brilliant.cafe](https://www.brilliant.cafe), so I set up a [static website on Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html). Next I used [CloudFront to serve my static website hosted on Amazon S3](https://repost.aws/knowledge-center/cloudfront-serve-static-website). While hosting a static website in S3 does not support SSL/TLS certificates and HTTPS, once one is using CloudFront to serve one's static website hosted on S3. So, after using CloudFront to serve my static website hosted on Amazon S3, I was then able to require HTTPS for communication between a user's web browser and my deployment in CloudFront.

This used the following AWS services:
 * Route 53
 * S3
 * 
 * CloudFront
 * Certificate Manager

Here are some documentation links on setting this up:
 * [Hosting a HTTPS website using AWS S3 and CloudFront posted on November 23, 2017 by Matt Burgess](https://medium.com/@itsmattburgess/hosting-a-https-website-using-aws-s3-and-cloudfront-ee6521df03b9#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjgyMjgzOGMxYzhiZjllZGNmMWY1MDUwNjYyZTU0YmNiMWFkYjViNWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2ODQ1MTk1NjEsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMDg2NDc5NDIwOTk1NDgyNTY3OSIsImVtYWlsIjoicGV0ZXIuamlyYWtAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF6cCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsIm5hbWUiOiJQZXRlciBFbGRyaXRjaCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BR05teXhZZFd1ZTV3N0c3WnktRWZOdkF2WV9BdGZaYVBzand0SXhYTzUxajNnPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IlBldGVyIiwiZmFtaWx5X25hbWUiOiJFbGRyaXRjaCIsImlhdCI6MTY4NDUxOTg2MSwiZXhwIjoxNjg0NTIzNDYxLCJqdGkiOiIyZGM3ZmI4YTAwNzQ1OWU4N2QzMjZjOGIzYzNlZTI5OTZiNzVmOGI0In0.D46M8NlwHyQL1lvAoepwtJK8qIIkVS_Zrkm9NBfJoiMLbUJ6S-jUohZ9PZZnRiLt8EmkzJTaeYP23xyUa0poDjdOutijpVSZpjsP21APutnPYYA1uka8dCHFb0lNIIQ3BQEi1dfCVcCpvJctVnarwPgc01yG7vWLEGDWUSIJhAy4MQr0MfxBi2892EA_pkcNv7tYwAsc18ADEa7C0ycpyjWUbRX_5gVzBIjiXR7ISIdKE-8NSfj7EwTk4P2DQ2sd15nBukCQMLbmHzUX5H8lvT7dEZZwAL3PfhA-ZFIVZkTBz7m4-yKpK5Zi2sBS9uk3vG07ILdh8xfN2YQxMzCHsA)
 * [Tutorial: Configuring a static website on Amazon S3 | Amazon Documetation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html)
   * [How do I use CloudFront to serve a static website hosted on Amazon S3? | AWS re:Post](https://repost.aws/knowledge-center/cloudfront-serve-static-website)
   * [Requiring HTTPS for communication between viewers and CloudFront | Amazon Documetation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-viewers-to-cloudfront.html)

I have deployed my most recent revisions to my implementation of Tetris. So now, you can [play Tetris](https://www.brilliant.cafe/games/tetris/index.html)

Note that it is fully working but not fully finished. Also it works in a computer's browser, but does not yet work on mobile.

My URL for the deployment of my most recent revisions of my Tetris imnplementation is: [https://www.brilliant.cafe/games/tetris/index.html](https://www.brilliant.cafe/games/tetris/index.html)

## Description
Periodically I engage in projects to practice my skills, build my skills, show what I know, and create small project demos for potential employers and clients. I was interested in a JavaScript project, so I Googled for a project to create Tetris. I found a "tutorial" from [Educative](https://www.educative.io/) for [building Tetris with modern JavaScript](https://www.educative.io/blog/javascript-tutorial-build-tetris).

I initially anticipated that in this tutorial they solve the problem step by step and allow one to type along if one wished, the equivalent of those computer programming magazines from the 1980s which had programs one could type into one's computer, analogous to old paint-by-number paint kits where one created a painting by painting in the numbered shapes inside an outlined picture. Those kinds of tutorials can be instructive but they don't allow one to demonstrate one's own abilities since from start to finish the problem is solved for you.

Instead the [JavaScript tutorial: Build Tetris with modern JavaScript](https://www.educative.io/blog/javascript-tutorial-build-tetris) by [Educative](https://www.educative.io/) gives one a start, some hints, and a gentle push. One is given a starting point, some hints, and then encouraged to code a solution one's self.

While that provides less instruction were one to need instruction, it definitely gives one the opportunity to demonstrate one's own abilities since it doesn't provide a finished solution, just enough to get started.

I often accumulate many links to potential projects to work on. This one has been sitting waiting for me to attempt it for several years. I started this project on the evening of May 10th, 2023 and have been working on it intermittently since then. I have made substantial progress towards a completed solution.

The work presented is my own.

I have started this project and made substantial progress towards a solution, but have not yet completed it.

Below is an except from the start of the [JavaScript tutorial: Build Tetris with modern JavaScript](https://www.educative.io/blog/javascript-tutorial-build-tetris) by [Educative](https://www.educative.io/):

### JavaScript tutorial: Build Tetris with modern JavaScript
**Link:** [JavaScript tutorial: Build Tetris with modern JavaScript](https://www.educative.io/blog/javascript-tutorial-build-tetris)

![Tetris in JS](./images/tetris-in-js.jpg)

From [JavaScript tutorial: Build Tetris with modern JavaScript](https://www.educative.io/blog/javascript-tutorial-build-tetris) by [educative](https://www.educative.io/):

> Learning a new programming language is difficult and not everyone learns the same way. For many, hands-on exploration on a project or interactive tutorial is the key to lasting learning.
> 
> Especially for intuitive languages like JavaScript, building projects helps to provide context for how and why to use fundamental concepts in different applications. It also helps build your resume because you can show recruiters a collection of awesome projects to demonstrate your drive and developer skills.
> 
