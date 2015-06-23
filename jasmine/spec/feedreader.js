/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    describe('RSS Feeds', function() {

        /* Checks if allFeeds variable is defined and is not empty */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
        */

         //loop over allFeeds variable
        allFeeds.forEach(function(feed) {
            //check that URL is defined within allFeeds variable
            it("allFeeds should have a URL defined", function() {
                expect(feed.url).toBeDefined();
            });

            //check that URL in the allFeeds variable is not empty
            it("URL value should not be empty", function() {
                expect(feed.url.length).toBeGreaterThan(0);
            });

        });


        /* test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         //loop over allFeeds variable
         allFeeds.forEach(function(feed) {
            //check that name is defined within allFeeds variable
            it("allFeeds should have a name defined", function() {
                expect(feed.name).toBeDefined();
            });

            //check that name in the allFeeds variable is not empty
            it("Name value should not be empty", function() {
                expect(feed.name.length).toBeGreaterThan(0);
            });
        });


    });


    describe('The menu', function() {
        /* test that ensures the menu element is
        * hidden by default.
        */

        $(document).ready(function() {
            var myElement = $('<body>');
            it('should not have class "menu-hidden" on page load', function() {
                expect(myElement.hasClass("menu-hidden")).not.toBeTruthy();
            });
        });


        /* test that ensures the menu changes
        * visibility when the menu icon is clicked.
        */
        it('should show menu when icon is clicked', function() {
            //Imitate menu click
            $('.menu-icon-link').trigger('click');

            //get the class name on the body tag
            var x=document.getElementsByTagName('body')[0];
            var colClass = x.className;

            //check that class name on the body tag is not present
            expect(colClass).toBe('');
        });


        it('should hide menu on icon click', function() {
            //Imitate menu click
            $('.menu-icon-link').trigger('click');

            //get the class name on the body tag
            var x=document.getElementsByTagName('body')[0];
            var colClass = x.className;

            //check that class name on the body tag is menu-hidden
            expect(colClass).toBe('menu-hidden');
        });

    });



    /* test that ensures when a new feed is loaded
    * by the loadFeed function that the content actually changes.
    */
    describe('New Feed Selection', function() {
        var initialFeed;

        //load initial menu item
        loadFeed(0);

         beforeEach(function(done) {
            //store intial context
            initialFeed = $('.feed').html();
            //move on to next menu item
            loadFeed(1, done);
         });

         it('should change content', function(done) {
            expect($('.feed').html()).not.toEqual(initialFeed);
            //return back to original
            loadFeed(0, done);
         });
    });

}());
