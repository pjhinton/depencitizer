# depencitizer

## Mozilla Firefox extension for removing Mike Pence CTA on front end in.gov webpages.

### Rationale

Currently, the Indiana state government website has a number of high profile pages
which feature a prominent thumbnail image of the current Governor, which points
to the homepage for the Governor's web content.  It sits atop a retractable footer
element, but the thumbnail itself does not retract when a visitor opts to hide
the footer.  The page's underlying markup refers to the thumbnail as a "CTA", which 
stands for "call-to-action".  This is marketing speak for the part of a webpage
that is supposed to encourage the visitor to engage in some desired action.  

As a citizen wishing to find useful information on my state's website, I found the
idea of aggressively promoting the Governor on the front pages to be obnoxious,
if not ethically questionable from the standpoint of using state resources to promote
a specific politician.  As a software developer, I knew there was a way to script the 
suppression of this content.  That's why I developed this Firefox extension.  All it
does is seek out the HTML markup and hide it from view.

Right now the thumbnail is still seen briefly on page load.  As I become better versed
in the extension APIs, I may refine this code or even augment it with customizable 
effects.  This code is distributed under the MIT license, as it depends on jQuery to
do its magic.  Feel free to repurpose as needed.  Try to use it for good. :-)
