'use strict';

FreebaseAppApp.factory('freebase', function($http) {
  // Service logic

    var meaningOfLife = 42;

  // Public API here
    return {
        someMethod: function() {
            return meaningOfLife;
        },
        searchFreeBase: function(query,$scope){
            return {data:listData};
        },
        _searchFreeBase: function(query,$scope){
                var url = 'https://www.googleapis.com/freebase/v1/search?callback=JSON_CALLBACK&limit=100&query=';
                var promise = $http({method: 'JSONP', url: url + query}).
                success(function(data, status, headers, config) {
                    $scope.data = data;
                });
                return promise;
            },
        getItem: function(topicid,$scope){
                return {data:philadata};
            },
        _getItem: function(topicid,$scope){

                var url = 'https://www.googleapis.com/freebase/v1/topic/TOPICID?callback=JSON_CALLBACK';

                var promise = $http({method: 'JSONP', url: url.replace('TOPICID',topicid)}).
                    success(function(data, status, headers, config) {
                        // $scope.data = data;
                });
                return promise;
            }
    };
});




var philadata = {
    "id": "/m/0dclg",
    "property": {
        "/aviation/airport_operator/airports_operated": {
            "valuetype": "object",
            "values": [
                {
                    "text": "Philadelphia International Airport",
                    "lang": "en",
                    "id": "/m/01mz5z",
                    "creator": "/user/mbaker",
                    "timestamp": "2009-03-02T16:36:32.000Z"
                }
            ],
            "count": 1
        },
        "/book/book_subject/works": {
            "valuetype": "object",
            "values": [
                {
                    "text": "Closing Time: A Memoir",
                    "lang": "en",
                    "id": "/m/05v6xyn",
                    "creator": "/user/mbaker",
                    "timestamp": "2009-10-20T02:39:29.000Z"
                },
                {
                    "text": "A Prayer for the City",
                    "lang": "en",
                    "id": "/m/06jcfsc",
                    "creator": "/user/mbaker",
                    "timestamp": "2010-01-20T20:23:53.001Z"
                }
            ],
            "count": 2
        },
        "/common/topic/alias": {
            "valuetype": "string",
            "values": [
                {
                    "text": "Philly",
                    "lang": "en",
                    "value": "Philly",
                    "creator": "/user/skurtas",
                    "timestamp": "2007-11-30T17:18:38.000Z"
                },
                {
                    "text": "City of Brotherly Love",
                    "lang": "en",
                    "value": "City of Brotherly Love",
                    "creator": "/user/daveschappell",
                    "timestamp": "2007-04-26T19:55:04.001Z"
                },
                {
                    "text": "Philadelphia, Pennsylvania",
                    "lang": "en",
                    "value": "Philadelphia, Pennsylvania",
                    "creator": "/user/gardening_bot",
                    "timestamp": "2008-04-04T16:42:01.002Z"
                },
                {
                    "text": "Philadelphia County / Philadelphia city",
                    "lang": "en",
                    "value": "Philadelphia County / Philadelphia city",
                    "creator": "/user/mw_od_bot",
                    "timestamp": "2010-01-05T17:48:03.000Z"
                }
            ],
            "count": 5
        },
        "/common/topic/article": {
            "valuetype": "compound",
            "values": [
                {
                    "text": "Philadelphia ( /ˌfɪləˈdɛlfiə/) is the largest city in the Commonwealth of Pennsylvania and the...",
                    "lang": "en",
                    "id": "/m/0dcls",
                    "creator": "/user/mwcl_wikipedia_en",
                    "timestamp": "2006-10-22T09:54:11.008Z",
                    "property": {
                        "/common/document/source_uri": {
                            "valuetype": "uri",
                            "values": [
                                {
                                    "text": "http://wp/en/50585",
                                    "lang": "",
                                    "value": "http://wp/en/50585",
                                    "creator": "/user/mwcl_wikipedia_en",
                                    "timestamp": "2006-10-22T09:54:11.007Z"
                                }
                            ],
                            "count": 1
                        },
                        "/common/document/text": {
                            "valuetype": "string",
                            "values": [
                                {
                                    "text": "Philadelphia ( /ˌfɪləˈdɛlfiə/) is the largest city in the Commonwealth of Pennsylvania and the...",
                                    "lang": "en",
                                    "value": "Philadelphia ( /ˌfɪləˈdɛlfiə/) is the largest city in the Commonwealth of Pennsylvania and the county seat of Philadelphia County, with which it is coterminous. The city is located in the Northeastern United States along the Delaware and Schuylkill rivers. It is the fifth-most-populous city in the United States, with a population of 1,526,006 as of the 2010 U.S. Census. Philadelphia is also the commercial, cultural, and educational center of the Delaware Valley, home to 6 million people and the country's fifth-largest metropolitan area. The Philadelphia metropolitan division consists of five counties in Pennsylvania and has a population of 4,008,994. Popular nicknames for Philadelphia are Philly and The City of Brotherly Love, the latter of which comes from the literal meaning of the city's name in Greek (Greek: Φιλαδέλφεια ([pʰilaˈdelpʰeːa], Modern Greek: [filaˈðelfia]) \"brotherly love\", compounded from philos (φίλος) \"loving\", and adelphos (ἀδελφός) \"brother\").\nIn 1682, William Penn founded the city to serve as a port and provincial capital. Philadelphia grew rapidly, and by the 1750s it was the largest city and busiest port in the original 13 American colonies. During the",
                                    "creator": "/user/mwcl_wikipedia_en",
                                    "timestamp": "2006-10-22T09:54:11.007Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Freebase Data Team",
                                    "lang": "",
                                    "id": "/m/0gs8",
                                    "creator": "/user/mwcl_wikipedia_en",
                                    "timestamp": "2006-10-22T09:54:11.007Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Document",
                                    "lang": "",
                                    "id": "/common/document",
                                    "creator": "/user/mwcl_wikipedia_en",
                                    "timestamp": "2006-10-22T09:54:11.008Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                }
            ],
            "count": 1
        },
        "/common/topic/description": {
            "valuetype": "string",
            "values": [
                {
                    "text": "Philadelphia is the largest city in the Commonwealth of Pennsylvania, the second largest city on...",
                    "lang": "en",
                    "value": "Philadelphia is the largest city in the Commonwealth of Pennsylvania, the second largest city on the East Coast of the United States, and the fifth-most-populous city in the United States. It is located in the Northeastern United States along the Delaware and Schuylkill rivers, and it is the only consolidated city-county in Pennsylvania. As of the 2010 Census, the city had a population of 1,526,006. Philadelphia is the economic and cultural center of the Delaware Valley, home to 6 million people and the country's fifth-largest metropolitan area. The Philadelphia metropolitan division consists of five counties in Pennsylvania and has a population of 4,008,994. Popular nicknames for Philadelphia are Philly and The City of Brotherly Love, the latter of which comes from the literal meaning of the city's name in Greek.\nIn 1682, William Penn founded the city to serve as capital of Pennsylvania Colony. By the 1750s it passed Boston to become the largest city and busiest port in British America, and second in the British Empire, behind London. During the American Revolution, Philadelphia played an instrumental role as a meeting place for the Founding Fathers of the United States, who signed the Declaration of Independence in 1776 and the Constitution in 1787. Philadelphia was one of the nation's capitals during the Revolutionary War, and the city served as the temporary U.S. capital while Washington, D.C., was under construction. During the 19th century, Philadelphia became a major industrial center and railroad hub that grew from an influx of European immigrants. It became a prime destination for African Americans during the Great Migration and surpassed two million occupants by 1950.",
                    "creator": "/user/wikirecon_bot",
                    "project": "wikirecon",
                    "dataset": "/m/0kj4zz_",
                    "citation": {
                        "provider": "Wikipedia",
                        "statement": "Description licensed under the Creative Commons Attribution-ShareAlike License (http://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License).",
                        "uri": "http://en.wikipedia.org/wiki/Philadelphia"
                    }
                }
            ],
            "count": 39
        },
        "/common/topic/image": {
            "valuetype": "object",
            "values": [
                {
                    "text": "Skyline of Philadelphia, Pennsylvania",
                    "lang": "en",
                    "id": "/m/02dv2l3",
                    "creator": "/user/mwcl_images",
                    "timestamp": "2007-04-17T02:18:09.001Z"
                },
                {
                    "text": "Philadelphia skyline August 2007",
                    "lang": "en",
                    "id": "/m/03sxn7w",
                    "creator": "/user/mwcl_images",
                    "timestamp": "2008-03-14T23:45:55.000Z"
                },
                {
                    "text": "Official seal of Philadelphia",
                    "lang": "en",
                    "id": "/m/041pmn7",
                    "creator": "/user/mwcl_images",
                    "timestamp": "2008-05-07T19:33:50.000Z"
                }
            ],
            "count": 3
        },
        "/common/topic/notable_for": {
            "valuetype": "object",
            "values": [
                {
                    "text": "City/Town/Village",
                    "lang": "en",
                    "id": "/location/citytown"
                }
            ],
            "count": 1
        },
        "/common/topic/notable_types": {
            "valuetype": "object",
            "values": [
                {
                    "text": "City/Town/Village",
                    "lang": "en",
                    "id": "/location/citytown",
                    "timestamp": "2013-03-08T00:04:49.437Z"
                },
                {
                    "text": "Airport operator",
                    "lang": "en",
                    "id": "/aviation/airport_operator",
                    "timestamp": "2013-03-08T00:04:49.437Z"
                },
                {
                    "text": "Administrative Division",
                    "lang": "en",
                    "id": "/location/administrative_division",
                    "timestamp": "2013-03-08T00:04:49.437Z"
                },
                {
                    "text": "Travel destination",
                    "lang": "en",
                    "id": "/travel/travel_destination",
                    "timestamp": "2013-03-08T00:04:49.437Z"
                },
                {
                    "text": "Places Visited Westward by Lewis & Clark",
                    "lang": "en",
                    "id": "/base/lewisandclark/places_westward",
                    "timestamp": "2013-03-08T00:04:49.437Z"
                },
                {
                    "text": "Top Architectural City",
                    "lang": "en",
                    "id": "/user/brendan/default_domain/top_architectural_city",
                    "timestamp": "2013-03-08T00:04:49.437Z"
                },
                {
                    "text": "HUD County Place",
                    "lang": "en",
                    "id": "/location/hud_county_place",
                    "timestamp": "2013-03-08T00:04:49.437Z"
                },
                {
                    "text": "Governmental Jurisdiction",
                    "lang": "en",
                    "id": "/government/governmental_jurisdiction",
                    "timestamp": "2013-03-08T00:04:49.437Z"
                },
                {
                    "text": "Dated location",
                    "lang": "en",
                    "id": "/location/dated_location",
                    "timestamp": "2013-03-08T00:04:49.437Z"
                },
                {
                    "text": "Real place",
                    "lang": "en",
                    "id": "/base/aubreymaturin/real_place",
                    "timestamp": "2013-03-08T00:04:49.437Z"
                }
            ],
            "count": 34
        },
        "/common/topic/official_website": {
            "valuetype": "uri",
            "values": [
                {
                    "text": "http://www.phila.gov",
                    "lang": "",
                    "value": "http://www.phila.gov",
                    "creator": "/user/jon",
                    "timestamp": "2011-11-12T23:35:30.000Z"
                }
            ],
            "count": 1
        },
        "/common/topic/topic_equivalent_webpage": {
            "valuetype": "uri",
            "values": [
                {
                    "text": "http://en.wikipedia.org/wiki/index.html?curid=50585",
                    "lang": "",
                    "value": "http://en.wikipedia.org/wiki/index.html?curid=50585",
                    "creator": "/user/metaweb",
                    "timestamp": "2006-10-22T09:54:11.007Z"
                },
                {
                    "text": "http://www.geonames.org/4560349/",
                    "lang": "",
                    "value": "http://www.geonames.org/4560349/",
                    "creator": "/user/mwcl_geonames",
                    "timestamp": "2007-03-22T21:11:07.006Z"
                },
                {
                    "text": "http://pt.wikipedia.org/wiki/index.html?curid=39266",
                    "lang": "",
                    "value": "http://pt.wikipedia.org/wiki/index.html?curid=39266",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-25T20:52:42.000Z"
                },
                {
                    "text": "http://ja.wikipedia.org/wiki/index.html?curid=38084",
                    "lang": "",
                    "value": "http://ja.wikipedia.org/wiki/index.html?curid=38084",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-26T06:33:06.001Z"
                },
                {
                    "text": "http://de.wikipedia.org/wiki/index.html?curid=44481",
                    "lang": "",
                    "value": "http://de.wikipedia.org/wiki/index.html?curid=44481",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-27T10:07:51.000Z"
                },
                {
                    "text": "http://ru.wikipedia.org/wiki/index.html?curid=54985",
                    "lang": "",
                    "value": "http://ru.wikipedia.org/wiki/index.html?curid=54985",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-27T11:42:35.000Z"
                },
                {
                    "text": "http://bg.wikipedia.org/wiki/index.html?curid=58161",
                    "lang": "",
                    "value": "http://bg.wikipedia.org/wiki/index.html?curid=58161",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-28T11:41:34.000Z"
                },
                {
                    "text": "http://it.wikipedia.org/wiki/index.html?curid=18560",
                    "lang": "",
                    "value": "http://it.wikipedia.org/wiki/index.html?curid=18560",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-28T23:45:43.001Z"
                },
                {
                    "text": "http://es.wikipedia.org/wiki/index.html?curid=13419",
                    "lang": "",
                    "value": "http://es.wikipedia.org/wiki/index.html?curid=13419",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-29T03:15:22.000Z"
                },
                {
                    "text": "http://fr.wikipedia.org/wiki/index.html?curid=66438",
                    "lang": "",
                    "value": "http://fr.wikipedia.org/wiki/index.html?curid=66438",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-29T11:12:30.000Z"
                }
            ],
            "count": 82
        },
        "/common/topic/topical_webpage": {
            "valuetype": "uri",
            "values": [
                {
                    "text": "http://www.phila.gov/",
                    "lang": "",
                    "value": "http://www.phila.gov/",
                    "creator": "/user/gardening_bot",
                    "timestamp": "2011-11-01T02:27:49.000Z"
                },
                {
                    "text": "http://wikitravel.org/en/Philadelphia",
                    "lang": "",
                    "value": "http://wikitravel.org/en/Philadelphia",
                    "creator": "/user/gardening_bot",
                    "timestamp": "2011-11-01T02:27:49.000Z"
                }
            ],
            "count": 2
        },
        "/fictional_universe/fictional_setting/contains": {
            "valuetype": "object",
            "values": [
                {
                    "text": "Fallen Area",
                    "lang": "en",
                    "id": "/m/0dm26r",
                    "creator": "/user/jeff",
                    "timestamp": "2008-11-25T00:59:52.000Z"
                }
            ],
            "count": 1
        },
        "/fictional_universe/fictional_setting/fictional_characters_born_here": {
            "valuetype": "object",
            "values": [
                {
                    "text": "Susie Salmon",
                    "lang": "en",
                    "id": "/m/07yk3jl",
                    "creator": "/user/becky2987",
                    "timestamp": "2009-12-29T05:33:43.000Z"
                },
                {
                    "text": "Maury Parkman",
                    "lang": "en",
                    "id": "/m/094wppv",
                    "creator": "/user/electromuffin",
                    "timestamp": "2011-02-26T20:50:47.000Z"
                },
                {
                    "text": "Doctor Strange",
                    "lang": "en",
                    "id": "/m/0139tx",
                    "creator": "/user/hailey2009",
                    "timestamp": "2011-07-02T16:00:04.000Z"
                },
                {
                    "text": "Donald Pierce",
                    "lang": "en",
                    "id": "/m/04dtw8",
                    "creator": "/user/hailey2009",
                    "timestamp": "2011-10-02T04:15:12.000Z"
                },
                {
                    "text": "Mr. Sandman",
                    "lang": "en",
                    "id": "/m/0ddbcd_",
                    "creator": "/user/hailey2009",
                    "timestamp": "2011-11-04T22:26:33.001Z"
                },
                {
                    "text": "Rose DeWitt Bukater",
                    "lang": "en",
                    "id": "/m/062bf_",
                    "creator": "/user/becky2987",
                    "timestamp": "2012-04-20T03:18:11.000Z"
                },
                {
                    "text": "Rachel Patterson",
                    "lang": "en",
                    "id": "/m/0qgmkr8",
                    "creator": "/user/curly2222",
                    "timestamp": "2013-02-06T15:21:41.000Z"
                }
            ],
            "count": 7
        },
        "/film/film_location/featured_in_films": {
            "valuetype": "object",
            "values": [
                {
                    "text": "Dawn of the Dead",
                    "lang": "en",
                    "id": "/m/0hcp1",
                    "creator": "/user/jon",
                    "timestamp": "2007-07-17T19:37:39.000Z"
                },
                {
                    "text": "Crumb",
                    "lang": "en",
                    "id": "/m/03jfly",
                    "creator": "/user/jon",
                    "timestamp": "2007-07-17T19:11:50.000Z"
                },
                {
                    "text": "Rocky V",
                    "lang": "en",
                    "id": "/m/0140g4",
                    "creator": "/user/jon",
                    "timestamp": "2007-07-17T19:09:51.000Z"
                },
                {
                    "text": "Rocky III",
                    "lang": "en",
                    "id": "/m/013vbq",
                    "creator": "/user/jon",
                    "timestamp": "2007-07-17T19:09:41.000Z"
                },
                {
                    "text": "Rocky II",
                    "lang": "en",
                    "id": "/m/0135_9",
                    "creator": "/user/jon",
                    "timestamp": "2007-07-17T19:09:29.000Z"
                },
                {
                    "text": "Rocky",
                    "lang": "en",
                    "id": "/m/0cf08",
                    "creator": "/user/jon",
                    "timestamp": "2007-07-17T19:07:23.000Z"
                },
                {
                    "text": "Invincible",
                    "lang": "en",
                    "id": "/m/0g0x9c",
                    "creator": "/user/marykay",
                    "timestamp": "2007-07-16T14:54:51.000Z"
                },
                {
                    "text": "Signs",
                    "lang": "en",
                    "id": "/m/0jjy0",
                    "creator": "/user/marykay",
                    "timestamp": "2007-07-16T14:35:15.000Z"
                },
                {
                    "text": "Philadelphia",
                    "lang": "en",
                    "id": "/m/02d413",
                    "creator": "/user/marykay",
                    "timestamp": "2007-07-16T14:34:41.000Z"
                },
                {
                    "text": "The Age of Innocence",
                    "lang": "en",
                    "id": "/m/0f858v",
                    "creator": "/user/marykay",
                    "timestamp": "2007-07-16T14:34:01.000Z"
                }
            ],
            "count": 30
        },
        "/government/governmental_jurisdiction/governing_officials": {
            "valuetype": "compound",
            "values": [
                {
                    "text": "Mayor - 2008-01-07 - Michael Nutter - Mayor of Philadelphia - emariemoura - Government Position Held",
                    "lang": "en",
                    "id": "/m/0k1bd47",
                    "creator": "/user/emariemoura",
                    "timestamp": "2012-06-29T23:58:55.000Z",
                    "property": {
                        "/government/government_position_held/basic_title": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Mayor",
                                    "lang": "en",
                                    "id": "/m/0pqc5",
                                    "creator": "/user/emariemoura",
                                    "timestamp": "2012-06-29T23:58:55.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/from": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "2008-01-07",
                                    "lang": "",
                                    "value": "2008-01-07",
                                    "creator": "/user/emariemoura",
                                    "timestamp": "2012-06-29T23:58:55.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/office_holder": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Michael Nutter",
                                    "lang": "en",
                                    "id": "/m/06qlr0",
                                    "creator": "/user/emariemoura",
                                    "timestamp": "2012-06-29T23:58:55.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/office_position_or_title": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Mayor of Philadelphia",
                                    "lang": "en",
                                    "id": "/m/0k1bmck",
                                    "creator": "/user/emariemoura",
                                    "timestamp": "2012-06-30T05:24:14.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "emariemoura",
                                    "lang": "en",
                                    "id": "/m/0gtmdcs",
                                    "creator": "/user/emariemoura",
                                    "timestamp": "2012-06-29T23:58:55.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Government Position Held",
                                    "lang": "en",
                                    "id": "/government/government_position_held",
                                    "creator": "/user/emariemoura",
                                    "timestamp": "2012-06-29T23:58:55.000Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                },
                {
                    "text": "Mayor - 2000-01-03 - John F. Street - Mayor of Philadelphia - 2008-01-07 - skud - Government Position Held",
                    "lang": "en",
                    "id": "/m/0445kvz",
                    "creator": "/user/skud",
                    "timestamp": "2008-05-24T16:19:07.000Z",
                    "property": {
                        "/government/government_position_held/basic_title": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Mayor",
                                    "lang": "en",
                                    "id": "/m/0pqc5",
                                    "creator": "/user/gardening_bot",
                                    "timestamp": "2011-11-18T21:40:11.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/from": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "2000-01-03",
                                    "lang": "",
                                    "value": "2000-01-03",
                                    "creator": "/user/emariemoura",
                                    "timestamp": "2012-06-30T00:03:20.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/office_holder": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "John F. Street",
                                    "lang": "en",
                                    "id": "/m/02b25l",
                                    "creator": "/user/skud",
                                    "timestamp": "2008-05-24T16:19:07.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/office_position_or_title": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Mayor of Philadelphia",
                                    "lang": "en",
                                    "id": "/m/0k1bmck",
                                    "creator": "/user/emariemoura",
                                    "timestamp": "2012-06-30T05:25:18.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/to": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "2008-01-07",
                                    "lang": "",
                                    "value": "2008-01-07",
                                    "creator": "/user/emariemoura",
                                    "timestamp": "2012-06-30T00:03:20.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "skud",
                                    "lang": "en",
                                    "id": "/m/02nzkjl",
                                    "creator": "/user/skud",
                                    "timestamp": "2008-05-24T16:19:07.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Government Position Held",
                                    "lang": "en",
                                    "id": "/government/government_position_held",
                                    "creator": "/user/skud",
                                    "timestamp": "2008-05-24T16:19:07.000Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                },
                {
                    "text": "George Washington - 1796-01-14 - William Jackson - Collector of the Port of Philadelphia - thadguidry - Government Position Held",
                    "lang": "en",
                    "id": "/m/0c6b3z4",
                    "creator": "/user/thadguidry",
                    "timestamp": "2010-06-28T18:32:37.001Z",
                    "property": {
                        "/government/government_position_held/appointed_by": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "George Washington",
                                    "lang": "en",
                                    "id": "/m/034rd",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T18:32:37.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/from": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "1796-01-14",
                                    "lang": "",
                                    "value": "1796-01-14",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T18:32:37.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/office_holder": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "William Jackson",
                                    "lang": "en",
                                    "id": "/m/0h6fyh",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T18:32:37.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/office_position_or_title": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Collector of the Port of Philadelphia",
                                    "lang": "en",
                                    "id": "/m/0c6b2f5",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T18:32:37.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "thadguidry",
                                    "lang": "en",
                                    "id": "/m/02n9x0s",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T18:32:37.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Government Position Held",
                                    "lang": "en",
                                    "id": "/government/government_position_held",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T18:32:37.000Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                },
                {
                    "text": "1685-06-28 - Christopher Snowden - Collector of the Port of Philadelphia - thadguidry - Government Position Held",
                    "lang": "en",
                    "id": "/m/0c6bt2q",
                    "creator": "/user/thadguidry",
                    "timestamp": "2010-06-28T19:01:02.001Z",
                    "property": {
                        "/government/government_position_held/from": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "1685-06-28",
                                    "lang": "",
                                    "value": "1685-06-28",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:01:02.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/office_holder": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Christopher Snowden",
                                    "lang": "en",
                                    "id": "/m/0c6bt2r",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:01:02.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/office_position_or_title": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Collector of the Port of Philadelphia",
                                    "lang": "en",
                                    "id": "/m/0c6b2f5",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:01:02.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "thadguidry",
                                    "lang": "en",
                                    "id": "/m/02n9x0s",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:01:02.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Government Position Held",
                                    "lang": "en",
                                    "id": "/government/government_position_held",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:01:02.000Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                },
                {
                    "text": "1686-09-18 - Samuel Land - Collector of the Port of Philadelphia - thadguidry - Government Position Held",
                    "lang": "en",
                    "id": "/m/0c6bt34",
                    "creator": "/user/thadguidry",
                    "timestamp": "2010-06-28T19:01:02.002Z",
                    "property": {
                        "/government/government_position_held/from": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "1686-09-18",
                                    "lang": "",
                                    "value": "1686-09-18",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:01:02.002Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/office_holder": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Samuel Land",
                                    "lang": "en",
                                    "id": "/m/0c6bt35",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:01:02.002Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/office_position_or_title": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Collector of the Port of Philadelphia",
                                    "lang": "en",
                                    "id": "/m/0c6b2f5",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:01:02.002Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "thadguidry",
                                    "lang": "en",
                                    "id": "/m/02n9x0s",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:01:02.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Government Position Held",
                                    "lang": "en",
                                    "id": "/government/government_position_held",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:01:02.002Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                },
                {
                    "text": "1694-02-18 - John Deplove - Collector of the Port of Philadelphia - thadguidry - Government Position Held",
                    "lang": "en",
                    "id": "/m/0c6btmc",
                    "creator": "/user/thadguidry",
                    "timestamp": "2010-06-28T19:02:08.002Z",
                    "property": {
                        "/government/government_position_held/from": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "1694-02-18",
                                    "lang": "",
                                    "value": "1694-02-18",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:02:08.002Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/office_holder": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "John Deplove",
                                    "lang": "en",
                                    "id": "/m/0c6btmd",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:02:08.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/office_position_or_title": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Collector of the Port of Philadelphia",
                                    "lang": "en",
                                    "id": "/m/0c6b2f5",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:02:08.002Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "thadguidry",
                                    "lang": "en",
                                    "id": "/m/02n9x0s",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:02:08.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Government Position Held",
                                    "lang": "en",
                                    "id": "/government/government_position_held",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:02:08.002Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                },
                {
                    "text": "1698-04-15 - John Jewell - Collector of the Port of Philadelphia - thadguidry - Government Position Held",
                    "lang": "en",
                    "id": "/m/0c6bwhj",
                    "creator": "/user/thadguidry",
                    "timestamp": "2010-06-28T19:06:09.001Z",
                    "property": {
                        "/government/government_position_held/from": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "1698-04-15",
                                    "lang": "",
                                    "value": "1698-04-15",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:06:09.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/office_holder": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "John Jewell",
                                    "lang": "en",
                                    "id": "/m/0c6bwhk",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:06:09.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/office_position_or_title": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Collector of the Port of Philadelphia",
                                    "lang": "en",
                                    "id": "/m/0c6b2f5",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:06:09.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "thadguidry",
                                    "lang": "en",
                                    "id": "/m/02n9x0s",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:06:09.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Government Position Held",
                                    "lang": "en",
                                    "id": "/government/government_position_held",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:06:09.000Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                },
                {
                    "text": "1696-11-21 - Matthew Birch - Collector of the Port of Philadelphia - thadguidry - Government Position Held",
                    "lang": "en",
                    "id": "/m/0c6bwhy",
                    "creator": "/user/thadguidry",
                    "timestamp": "2010-06-28T19:06:09.002Z",
                    "property": {
                        "/government/government_position_held/from": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "1696-11-21",
                                    "lang": "",
                                    "value": "1696-11-21",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:06:09.002Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/office_holder": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Matthew Birch",
                                    "lang": "en",
                                    "id": "/m/0c6bwhz",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:06:09.002Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/office_position_or_title": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Collector of the Port of Philadelphia",
                                    "lang": "en",
                                    "id": "/m/0c6b2f5",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:06:09.002Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "thadguidry",
                                    "lang": "en",
                                    "id": "/m/02n9x0s",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:06:09.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Government Position Held",
                                    "lang": "en",
                                    "id": "/government/government_position_held",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:06:09.002Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                },
                {
                    "text": "1768 - William Sheppard - Collector of the Port of Philadelphia - thadguidry - Government Position Held",
                    "lang": "en",
                    "id": "/m/0c6bz2g",
                    "creator": "/user/thadguidry",
                    "timestamp": "2010-06-28T19:12:01.001Z",
                    "property": {
                        "/government/government_position_held/from": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "1768",
                                    "lang": "",
                                    "value": "1768",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:12:01.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/office_holder": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "William Sheppard",
                                    "lang": "en",
                                    "id": "/m/0c6bz2h",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:12:01.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/office_position_or_title": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Collector of the Port of Philadelphia",
                                    "lang": "en",
                                    "id": "/m/0c6b2f5",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:12:01.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "thadguidry",
                                    "lang": "en",
                                    "id": "/m/02n9x0s",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:12:01.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Government Position Held",
                                    "lang": "en",
                                    "id": "/government/government_position_held",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:12:01.000Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                },
                {
                    "text": "1699 - Robert Quarry - Collector of the Port of Philadelphia - thadguidry - Government Position Held",
                    "lang": "en",
                    "id": "/m/0c6bz2w",
                    "creator": "/user/thadguidry",
                    "timestamp": "2010-06-28T19:12:01.002Z",
                    "property": {
                        "/government/government_position_held/from": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "1699",
                                    "lang": "",
                                    "value": "1699",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:12:01.002Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/office_holder": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Robert Quarry",
                                    "lang": "en",
                                    "id": "/m/0c6bz2x",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:12:01.002Z"
                                }
                            ],
                            "count": 1
                        },
                        "/government/government_position_held/office_position_or_title": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Collector of the Port of Philadelphia",
                                    "lang": "en",
                                    "id": "/m/0c6b2f5",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:12:01.002Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "thadguidry",
                                    "lang": "en",
                                    "id": "/m/02n9x0s",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:12:01.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Government Position Held",
                                    "lang": "en",
                                    "id": "/government/government_position_held",
                                    "creator": "/user/thadguidry",
                                    "timestamp": "2010-06-28T19:12:01.002Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                }
            ],
            "count": 31
        },
        "/government/governmental_jurisdiction/government_bodies": {
            "valuetype": "object",
            "values": [
                {
                    "text": "Philadelphia City Council",
                    "lang": "en",
                    "id": "/m/023jd4",
                    "creator": "/user/evening",
                    "timestamp": "2009-05-14T15:46:04.000Z"
                }
            ],
            "count": 1
        },
        "/location/capital_of_administrative_division/capital_of": {
            "valuetype": "compound",
            "values": [
                {
                    "text": "Philadelphia County - gmackenz - Administrative division/capital relationship",
                    "lang": "en",
                    "id": "/m/0jvvw67",
                    "creator": "/user/gmackenz",
                    "timestamp": "2012-05-25T19:36:27.006Z",
                    "property": {
                        "/location/administrative_division_capital_relationship/administrative_division": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Philadelphia County",
                                    "lang": "en",
                                    "id": "/m/0mwfy",
                                    "creator": "/user/gmackenz",
                                    "timestamp": "2012-05-25T19:36:27.006Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "gmackenz",
                                    "lang": "en",
                                    "id": "/m/025b6jh",
                                    "creator": "/user/gmackenz",
                                    "timestamp": "2012-05-25T19:36:27.006Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Administrative division/capital relationship",
                                    "lang": "en",
                                    "id": "/location/administrative_division_capital_relationship",
                                    "creator": "/user/gmackenz",
                                    "timestamp": "2012-05-25T19:36:27.006Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                }
            ],
            "count": 1
        },
        "/location/citytown/postal_codes": {
            "valuetype": "object",
            "values": [
                {
                    "text": "19019",
                    "lang": "en",
                    "id": "/m/07nrjs8",
                    "creator": "/user/geo_bot",
                    "timestamp": "2009-11-20T00:47:42.001Z"
                },
                {
                    "text": "19093",
                    "lang": "en",
                    "id": "/m/07nrjn_",
                    "creator": "/user/geo_bot",
                    "timestamp": "2009-11-20T00:47:51.000Z"
                },
                {
                    "text": "19092",
                    "lang": "en",
                    "id": "/m/07nrjp6",
                    "creator": "/user/geo_bot",
                    "timestamp": "2009-11-20T00:47:51.000Z"
                },
                {
                    "text": "19101",
                    "lang": "en",
                    "id": "/m/020tg4b",
                    "creator": "/user/geo_bot",
                    "timestamp": "2009-11-20T00:47:51.001Z"
                },
                {
                    "text": "19102",
                    "lang": "en",
                    "id": "/m/020t09m",
                    "creator": "/user/geo_bot",
                    "timestamp": "2009-11-20T00:47:51.001Z"
                },
                {
                    "text": "19099",
                    "lang": "en",
                    "id": "/m/07nrjnk",
                    "creator": "/user/geo_bot",
                    "timestamp": "2009-11-20T00:47:51.001Z"
                },
                {
                    "text": "19108",
                    "lang": "en",
                    "id": "/m/03dx5r_",
                    "creator": "/user/geo_bot",
                    "timestamp": "2009-11-20T00:47:52.000Z"
                },
                {
                    "text": "19110",
                    "lang": "en",
                    "id": "/m/07nrjmx",
                    "creator": "/user/geo_bot",
                    "timestamp": "2009-11-20T00:47:52.000Z"
                },
                {
                    "text": "19107",
                    "lang": "en",
                    "id": "/m/020szn6",
                    "creator": "/user/geo_bot",
                    "timestamp": "2009-11-20T00:47:52.000Z"
                },
                {
                    "text": "19105",
                    "lang": "en",
                    "id": "/m/07nrjnb",
                    "creator": "/user/geo_bot",
                    "timestamp": "2009-11-20T00:47:52.000Z"
                }
            ],
            "count": 87
        },
        "/location/dated_location/date_founded": {
            "valuetype": "datetime",
            "values": [
                {
                    "text": "1682-10-27",
                    "lang": "",
                    "value": "1682-10-27",
                    "creator": "/user/jg",
                    "timestamp": "2011-11-17T01:00:58.000Z"
                }
            ],
            "count": 1
        },
        "/location/hud_county_place/county": {
            "valuetype": "object",
            "values": [
                {
                    "text": "Philadelphia County",
                    "lang": "en",
                    "id": "/m/0mwfy",
                    "creator": "/user/mw_od_bot",
                    "timestamp": "2010-01-05T17:48:03.000Z"
                }
            ],
            "count": 1
        },
        "/location/hud_county_place/place": {
            "valuetype": "object",
            "values": [
                {
                    "text": "Philadelphia",
                    "lang": "en",
                    "id": "/m/0dclg",
                    "creator": "/user/mw_od_bot",
                    "timestamp": "2010-01-05T17:48:03.000Z"
                }
            ],
            "count": 1
        },
        "/location/hud_foreclosure_area/bls_unemployment_rate": {
            "valuetype": "compound",
            "values": [
                {
                    "text": "2008 - 0.072 - Freebase Data Team - Dated Float",
                    "lang": "en",
                    "id": "/m/07j8nlg",
                    "creator": "/user/mw_od_bot",
                    "timestamp": "2010-01-05T17:48:03.002Z",
                    "property": {
                        "/measurement_unit/dated_float/date": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "2008",
                                    "lang": "",
                                    "value": "2008",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:14:00.002Z"
                                }
                            ],
                            "count": 1
                        },
                        "/measurement_unit/dated_float/number": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "0.072",
                                    "lang": "en",
                                    "value": 0.072,
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:14:00.002Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Freebase Data Team",
                                    "lang": "en",
                                    "id": "/m/07c7_s7",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:14:00.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Dated Float",
                                    "lang": "en",
                                    "id": "/measurement_unit/dated_float",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:14:00.002Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                }
            ],
            "count": 1
        },
        "/location/hud_foreclosure_area/estimated_number_foreclosures": {
            "valuetype": "compound",
            "values": [
                {
                    "text": "14436 - United States Department of Housing and Urban Development - 2008 - Freebase Data Team - Dated Integer",
                    "lang": "en",
                    "id": "/m/07j8nkl",
                    "creator": "/user/mw_od_bot",
                    "timestamp": "2010-01-05T17:48:03.001Z",
                    "property": {
                        "/measurement_unit/dated_integer/number": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "14436",
                                    "lang": "en",
                                    "value": 14436,
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:13:59.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/measurement_unit/dated_integer/source": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "United States Department of Housing and Urban Development",
                                    "lang": "en",
                                    "id": "/m/0jbk9",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:13:59.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/measurement_unit/dated_integer/year": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "2008",
                                    "lang": "",
                                    "value": "2008",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:13:59.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Freebase Data Team",
                                    "lang": "en",
                                    "id": "/m/07c7_s7",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:13:59.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Dated Integer",
                                    "lang": "en",
                                    "id": "/measurement_unit/dated_integer",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:13:59.000Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                }
            ],
            "count": 1
        },
        "/location/hud_foreclosure_area/estimated_number_of_mortgages": {
            "valuetype": "compound",
            "values": [
                {
                    "text": "255266 - United States Department of Housing and Urban Development - 2008 - Freebase Data Team - Dated Integer",
                    "lang": "en",
                    "id": "/m/07j8nkt",
                    "creator": "/user/mw_od_bot",
                    "timestamp": "2010-01-05T17:48:03.001Z",
                    "property": {
                        "/measurement_unit/dated_integer/number": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "255266",
                                    "lang": "en",
                                    "value": 255266,
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:14:00.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/measurement_unit/dated_integer/source": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "United States Department of Housing and Urban Development",
                                    "lang": "en",
                                    "id": "/m/0jbk9",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:14:00.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/measurement_unit/dated_integer/year": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "2008",
                                    "lang": "",
                                    "value": "2008",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:14:00.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Freebase Data Team",
                                    "lang": "en",
                                    "id": "/m/07c7_s7",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:13:59.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Dated Integer",
                                    "lang": "en",
                                    "id": "/measurement_unit/dated_integer",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:13:59.001Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                }
            ],
            "count": 1
        },
        "/location/hud_foreclosure_area/hhuniv": {
            "valuetype": "compound",
            "values": [
                {
                    "text": "590283 - United States Department of Housing and Urban Development - 2008 - Freebase Data Team - Dated Integer",
                    "lang": "en",
                    "id": "/m/07j8nkc",
                    "creator": "/user/mw_od_bot",
                    "timestamp": "2010-01-05T17:48:03.001Z",
                    "property": {
                        "/measurement_unit/dated_integer/number": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "590283",
                                    "lang": "en",
                                    "value": 590283,
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:13:58.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/measurement_unit/dated_integer/source": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "United States Department of Housing and Urban Development",
                                    "lang": "en",
                                    "id": "/m/0jbk9",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:13:58.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/measurement_unit/dated_integer/year": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "2008",
                                    "lang": "",
                                    "value": "2008",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:13:59.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Freebase Data Team",
                                    "lang": "en",
                                    "id": "/m/07c7_s7",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:13:58.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Dated Integer",
                                    "lang": "en",
                                    "id": "/measurement_unit/dated_integer",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:13:58.000Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                }
            ],
            "count": 1
        },
        "/location/hud_foreclosure_area/ofheo_price_change": {
            "valuetype": "compound",
            "values": [
                {
                    "text": "2008 - 0.0 - Freebase Data Team - Dated Float",
                    "lang": "en",
                    "id": "/m/07j8nln",
                    "creator": "/user/mw_od_bot",
                    "timestamp": "2010-01-05T17:48:03.002Z",
                    "property": {
                        "/measurement_unit/dated_float/date": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "2008",
                                    "lang": "",
                                    "value": "2008",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:14:01.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/measurement_unit/dated_float/number": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "0.0",
                                    "lang": "en",
                                    "value": 0,
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:14:01.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Freebase Data Team",
                                    "lang": "en",
                                    "id": "/m/07c7_s7",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:14:01.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Dated Float",
                                    "lang": "en",
                                    "id": "/measurement_unit/dated_float",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:14:01.000Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                }
            ],
            "count": 1
        },
        "/location/hud_foreclosure_area/total_90_day_vacant_residential_addresses": {
            "valuetype": "compound",
            "values": [
                {
                    "text": "24382 - United States Department of Housing and Urban Development - 2008 - Freebase Data Team - Dated Integer",
                    "lang": "en",
                    "id": "/m/07j8nl0",
                    "creator": "/user/mw_od_bot",
                    "timestamp": "2010-01-05T17:48:03.002Z",
                    "property": {
                        "/measurement_unit/dated_integer/number": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "24382",
                                    "lang": "en",
                                    "value": 24382,
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:14:00.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/measurement_unit/dated_integer/source": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "United States Department of Housing and Urban Development",
                                    "lang": "en",
                                    "id": "/m/0jbk9",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:14:00.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/measurement_unit/dated_integer/year": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "2008",
                                    "lang": "",
                                    "value": "2008",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:14:00.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Freebase Data Team",
                                    "lang": "en",
                                    "id": "/m/07c7_s7",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:14:00.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Dated Integer",
                                    "lang": "en",
                                    "id": "/measurement_unit/dated_integer",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:14:00.000Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                }
            ],
            "count": 1
        },
        "/location/hud_foreclosure_area/total_residential_addresses": {
            "valuetype": "compound",
            "values": [
                {
                    "text": "640844 - United States Department of Housing and Urban Development - 2008 - Freebase Data Team - Dated Integer",
                    "lang": "en",
                    "id": "/m/07j8nl7",
                    "creator": "/user/mw_od_bot",
                    "timestamp": "2010-01-05T17:48:03.002Z",
                    "property": {
                        "/measurement_unit/dated_integer/number": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "640844",
                                    "lang": "en",
                                    "value": 640844,
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:14:00.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/measurement_unit/dated_integer/source": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "United States Department of Housing and Urban Development",
                                    "lang": "en",
                                    "id": "/m/0jbk9",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:14:00.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/measurement_unit/dated_integer/year": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "2008",
                                    "lang": "",
                                    "value": "2008",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:14:00.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Freebase Data Team",
                                    "lang": "en",
                                    "id": "/m/07c7_s7",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:14:00.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Dated Integer",
                                    "lang": "en",
                                    "id": "/measurement_unit/dated_integer",
                                    "creator": "/user/mw_od_bot",
                                    "timestamp": "2009-09-21T09:14:00.001Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                }
            ],
            "count": 1
        },
        "/location/location/adjoin_s": {
            "valuetype": "compound",
            "values": [
                {
                    "text": "New Jersey - skurtas - Adjoining Relationship",
                    "lang": "en",
                    "id": "/m/03bnjnx",
                    "creator": "/user/skurtas",
                    "timestamp": "2007-11-30T17:19:05.000Z",
                    "property": {
                        "/location/adjoining_relationship/adjoins": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "New Jersey",
                                    "lang": "en",
                                    "id": "/m/05fjf",
                                    "creator": "/user/skurtas",
                                    "timestamp": "2007-11-30T17:19:05.000Z"
                                }
                            ],
                            "count": 2
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "skurtas",
                                    "lang": "en",
                                    "id": "/m/03bnjmw",
                                    "creator": "/user/skurtas",
                                    "timestamp": "2007-11-30T17:19:05.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Adjoining Relationship",
                                    "lang": "en",
                                    "id": "/location/adjoining_relationship",
                                    "creator": "/user/skurtas",
                                    "timestamp": "2007-11-30T17:19:05.000Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                },
                {
                    "text": "Bucks County - marykay - Adjoining Relationship",
                    "lang": "en",
                    "id": "/m/02nrlg_",
                    "creator": "/user/marykay",
                    "timestamp": "2007-07-16T14:12:54.000Z",
                    "property": {
                        "/location/adjoining_relationship/adjoins": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Bucks County",
                                    "lang": "en",
                                    "id": "/m/0mwxz",
                                    "creator": "/user/marykay",
                                    "timestamp": "2007-07-16T14:12:54.000Z"
                                }
                            ],
                            "count": 2
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "marykay",
                                    "lang": "en",
                                    "id": "/m/02nrlbv",
                                    "creator": "/user/marykay",
                                    "timestamp": "2007-07-16T14:12:54.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Adjoining Relationship",
                                    "lang": "en",
                                    "id": "/location/adjoining_relationship",
                                    "creator": "/user/marykay",
                                    "timestamp": "2007-07-16T14:12:54.000Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                },
                {
                    "text": "Montgomery County - marykay - Adjoining Relationship",
                    "lang": "en",
                    "id": "/m/02nrlgs",
                    "creator": "/user/marykay",
                    "timestamp": "2007-07-16T14:12:41.000Z",
                    "property": {
                        "/location/adjoining_relationship/adjoins": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Montgomery County",
                                    "lang": "en",
                                    "id": "/m/0fxyd",
                                    "creator": "/user/marykay",
                                    "timestamp": "2007-07-16T14:12:41.000Z"
                                }
                            ],
                            "count": 2
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "marykay",
                                    "lang": "en",
                                    "id": "/m/02nrlbv",
                                    "creator": "/user/marykay",
                                    "timestamp": "2007-07-16T14:12:41.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Adjoining Relationship",
                                    "lang": "en",
                                    "id": "/location/adjoining_relationship",
                                    "creator": "/user/marykay",
                                    "timestamp": "2007-07-16T14:12:41.000Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                },
                {
                    "text": "Delaware County - marykay - Adjoining Relationship",
                    "lang": "en",
                    "id": "/m/02nrlgk",
                    "creator": "/user/marykay",
                    "timestamp": "2007-07-16T14:11:16.000Z",
                    "property": {
                        "/location/adjoining_relationship/adjoins": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Delaware County",
                                    "lang": "en",
                                    "id": "/m/0f4y_",
                                    "creator": "/user/marykay",
                                    "timestamp": "2007-07-16T14:11:16.000Z"
                                }
                            ],
                            "count": 2
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "marykay",
                                    "lang": "en",
                                    "id": "/m/02nrlbv",
                                    "creator": "/user/marykay",
                                    "timestamp": "2007-07-16T14:11:16.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Adjoining Relationship",
                                    "lang": "en",
                                    "id": "/location/adjoining_relationship",
                                    "creator": "/user/marykay",
                                    "timestamp": "2007-07-16T14:11:16.000Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                },
                {
                    "text": "Cheltenham Township - osprey - Adjoining Relationship",
                    "lang": "en",
                    "id": "/m/09k2zc5",
                    "creator": "/user/osprey",
                    "timestamp": "2009-12-28T18:27:32.001Z",
                    "property": {
                        "/location/adjoining_relationship/adjoins": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Cheltenham Township",
                                    "lang": "en",
                                    "id": "/m/0_6rz",
                                    "creator": "/user/osprey",
                                    "timestamp": "2009-12-28T18:27:32.001Z"
                                }
                            ],
                            "count": 2
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "osprey",
                                    "lang": "en",
                                    "id": "/m/052v2nz",
                                    "creator": "/user/osprey",
                                    "timestamp": "2009-12-28T18:27:32.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Adjoining Relationship",
                                    "lang": "en",
                                    "id": "/location/adjoining_relationship",
                                    "creator": "/user/osprey",
                                    "timestamp": "2009-12-28T18:27:32.001Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                }
            ],
            "count": 5
        },
        "/location/location/area": {
            "valuetype": "float",
            "values": [
                {
                    "text": "369.3",
                    "lang": "en",
                    "value": 369.3,
                    "creator": "/user/mjsigua",
                    "timestamp": "2012-12-03T03:57:51.000Z"
                }
            ],
            "count": 1
        },
        "/location/location/containedby": {
            "valuetype": "object",
            "values": [
                {
                    "text": "Pennsylvania",
                    "lang": "en",
                    "id": "/m/05tbn",
                    "creator": "/user/vlatsina",
                    "timestamp": "2012-09-26T11:30:08.000Z"
                },
                {
                    "text": "United States of America",
                    "lang": "en",
                    "id": "/m/09c7w0",
                    "creator": "/user/kvkumar",
                    "timestamp": "2012-10-12T06:45:18.000Z"
                }
            ],
            "count": 2
        },
        "/location/location/contains": {
            "valuetype": "object",
            "values": [
                {
                    "text": "Edgar Allan Poe National Historic Site",
                    "lang": "en",
                    "id": "/m/07nym9",
                    "creator": "/user/faye",
                    "timestamp": "2007-08-25T00:52:33.000Z"
                },
                {
                    "text": "Garden Court",
                    "lang": "en",
                    "id": "/m/026xxdw",
                    "creator": "/user/pipeline",
                    "timestamp": "2008-04-25T01:39:56.010Z"
                },
                {
                    "text": "Woodland Terrace",
                    "lang": "en",
                    "id": "/m/026xxj_",
                    "creator": "/user/pipeline",
                    "timestamp": "2008-04-25T01:39:56.011Z"
                },
                {
                    "text": "St. Peter's Church, Philadelphia",
                    "lang": "en",
                    "id": "/m/0273j76",
                    "creator": "/user/pipeline",
                    "timestamp": "2008-04-25T01:40:37.004Z"
                },
                {
                    "text": "Christ Church Burial Ground",
                    "lang": "en",
                    "id": "/m/03nlly",
                    "creator": "/user/pipeline",
                    "timestamp": "2008-04-25T01:42:54.001Z"
                },
                {
                    "text": "West Philadelphia Streetcar Suburb Historic District",
                    "lang": "en",
                    "id": "/m/02qhn3b",
                    "creator": "/user/pipeline",
                    "timestamp": "2008-04-25T01:48:18.009Z"
                },
                {
                    "text": "Fort Mifflin",
                    "lang": "en",
                    "id": "/m/045kb4",
                    "creator": "/user/pipeline",
                    "timestamp": "2008-04-25T01:49:46.003Z"
                },
                {
                    "text": "Rittenhouse Square",
                    "lang": "en",
                    "id": "/m/046m_j",
                    "creator": "/user/pipeline",
                    "timestamp": "2008-04-25T01:50:17.000Z"
                },
                {
                    "text": "Stenton",
                    "lang": "en",
                    "id": "/m/02vz87s",
                    "creator": "/user/pipeline",
                    "timestamp": "2008-04-25T01:57:09.005Z"
                },
                {
                    "text": "Church of St. James the Less",
                    "lang": "en",
                    "id": "/m/03d2bv_",
                    "creator": "/user/pipeline",
                    "timestamp": "2008-04-25T02:28:24.001Z"
                }
            ],
            "count": 610
        },
        "/location/location/events": {
            "valuetype": "object",
            "values": [
                {
                    "text": "2008 Terror Film Festival",
                    "lang": "en",
                    "id": "/m/04tn2pv",
                    "creator": "/user/deleted_08_29_2011_01",
                    "timestamp": "2008-11-09T20:38:08.000Z"
                },
                {
                    "text": "The United States Constitutional Convention",
                    "lang": "en",
                    "id": "/m/05sjwt",
                    "creator": "/user/goodpairofshoes",
                    "timestamp": "2008-12-23T15:14:16.000Z"
                },
                {
                    "text": "George Washington 1793 presidential inauguration",
                    "lang": "en",
                    "id": "/m/05brcw6",
                    "creator": "/user/deleted_08_29_2011_01",
                    "timestamp": "2009-01-27T18:29:46.000Z"
                },
                {
                    "text": "John Adams 1797 presidential inauguration",
                    "lang": "en",
                    "id": "/m/05brcx5",
                    "creator": "/user/deleted_08_29_2011_01",
                    "timestamp": "2009-01-27T18:31:15.000Z"
                },
                {
                    "text": "1992 NCAA Men's Division I Basketball Tournament",
                    "lang": "en",
                    "id": "/m/0b_6v_",
                    "creator": "/user/deleted_08_29_2011_01",
                    "timestamp": "2009-02-15T18:38:42.000Z"
                },
                {
                    "text": "1992 NCAA Men's Division I Basketball Tournament - East Regional Semifinals",
                    "lang": "en",
                    "id": "/m/05gh_yk",
                    "creator": "/user/deleted_08_29_2011_01",
                    "timestamp": "2009-02-16T17:01:18.000Z"
                },
                {
                    "text": "Duke-Seton Hall 1992 NCAA Men's Division I Basketball Tournament Game",
                    "lang": "en",
                    "id": "/m/05gjvn7",
                    "creator": "/user/deleted_08_29_2011_01",
                    "timestamp": "2009-02-16T17:03:29.000Z"
                },
                {
                    "text": "Massachusetts-Kentucky 1992 NCAA Men's Division I Basketball Tournament Game",
                    "lang": "en",
                    "id": "/m/05gjvnm",
                    "creator": "/user/deleted_08_29_2011_01",
                    "timestamp": "2009-02-16T17:04:10.000Z"
                },
                {
                    "text": "1992 NCAA Men's Division I Basketball Tournament - East Regional Finals",
                    "lang": "en",
                    "id": "/m/05gh_z6",
                    "creator": "/user/deleted_08_29_2011_01",
                    "timestamp": "2009-02-16T17:05:25.000Z"
                },
                {
                    "text": "Duke-Kentucky 1992 NCAA Men's Division I Basketball Tournament Game",
                    "lang": "en",
                    "id": "/m/05gjvsp",
                    "creator": "/user/deleted_08_29_2011_01",
                    "timestamp": "2009-02-16T17:06:42.000Z"
                }
            ],
            "count": 108
        },
        "/location/location/geolocation": {
            "valuetype": "compound",
            "values": [
                {
                    "text": "NAD83 - 39.9522 - -75.1642 - Freebase Data Team - Geocode",
                    "lang": "en",
                    "id": "/m/0kgptg",
                    "creator": "/user/mwcl_infobox",
                    "timestamp": "2006-12-01T19:00:01.003Z",
                    "property": {
                        "/location/geocode/datum": {
                            "valuetype": "string",
                            "values": [
                                {
                                    "text": "NAD83",
                                    "lang": "en",
                                    "value": "NAD83",
                                    "creator": "/user/mwcl_infobox",
                                    "timestamp": "2006-12-01T19:00:01.002Z"
                                }
                            ],
                            "count": 1
                        },
                        "/location/geocode/latitude": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "39.9522",
                                    "lang": "en",
                                    "value": 39.9522,
                                    "creator": "/user/mwcl_infobox",
                                    "timestamp": "2006-12-01T19:00:01.002Z"
                                }
                            ],
                            "count": 1
                        },
                        "/location/geocode/longitude": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "-75.1642",
                                    "lang": "en",
                                    "value": -75.1642,
                                    "creator": "/user/mwcl_infobox",
                                    "timestamp": "2006-12-01T19:00:01.002Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Freebase Data Team",
                                    "lang": "en",
                                    "id": "/m/0jsg18",
                                    "creator": "/user/mwcl_infobox",
                                    "timestamp": "2006-12-01T19:00:01.002Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Geocode",
                                    "lang": "en",
                                    "id": "/location/geocode",
                                    "creator": "/user/mwcl_infobox",
                                    "timestamp": "2006-12-01T19:00:01.003Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                }
            ],
            "count": 1
        },
        "/location/location/nearby_airports": {
            "valuetype": "object",
            "values": [
                {
                    "text": "Philadelphia International Airport",
                    "lang": "en",
                    "id": "/m/01mz5z",
                    "creator": "/user/mwcl_infobox",
                    "timestamp": "2007-03-30T02:22:48.002Z"
                },
                {
                    "text": "Wings Field",
                    "lang": "en",
                    "id": "/m/0dxlsn",
                    "creator": "/user/mwcl_infobox",
                    "timestamp": "2007-03-30T02:22:50.002Z"
                },
                {
                    "text": "Northeast Philadelphia Airport",
                    "lang": "en",
                    "id": "/m/02_r46",
                    "creator": "/user/mwcl_infobox",
                    "timestamp": "2007-03-30T02:23:00.001Z"
                }
            ],
            "count": 3
        },
        "/location/location/people_born_here": {
            "valuetype": "object",
            "values": [
                {
                    "text": "Kevin Bacon",
                    "lang": "en",
                    "id": "/m/04954",
                    "creator": "/user/rookiemomheather",
                    "timestamp": "2007-01-03T20:51:57.000Z"
                },
                {
                    "text": "Walt Kelly",
                    "lang": "en",
                    "id": "/m/01bc0q",
                    "creator": "/user/patrick",
                    "timestamp": "2007-01-25T20:43:25.000Z"
                },
                {
                    "text": "Jon Udell",
                    "lang": "en",
                    "id": "/m/0h2g4s",
                    "creator": "/user/crism",
                    "timestamp": "2007-03-24T03:32:19.000Z"
                },
                {
                    "text": "Richard Saul Wurman",
                    "lang": "en",
                    "id": "/m/08gtvx",
                    "creator": "/user/rswurman",
                    "timestamp": "2007-04-10T17:46:18.000Z"
                },
                {
                    "text": "Jon Fishman",
                    "lang": "en",
                    "id": "/m/03p4dz",
                    "creator": "/user/jon",
                    "timestamp": "2007-04-13T18:44:05.000Z"
                },
                {
                    "text": "Jon Drummond",
                    "lang": "en",
                    "id": "/m/04c2yx",
                    "creator": "/user/jon",
                    "timestamp": "2007-04-13T20:13:14.000Z"
                },
                {
                    "text": "Kobe Bryant",
                    "lang": "en",
                    "id": "/m/01kmd4",
                    "creator": "/user/aprayim",
                    "timestamp": "2007-04-25T03:43:51.000Z"
                },
                {
                    "text": "Lorrie Menconi",
                    "lang": "en",
                    "id": "/m/0bxsll",
                    "creator": "/user/tigerlight",
                    "timestamp": "2007-05-08T22:14:12.000Z"
                },
                {
                    "text": "Kelly Monaco",
                    "lang": "en",
                    "id": "/m/035kmq",
                    "creator": "/user/tigerlight",
                    "timestamp": "2007-05-08T22:14:13.006Z"
                },
                {
                    "text": "Lani Todd",
                    "lang": "en",
                    "id": "/m/067_j1",
                    "creator": "/user/tigerlight",
                    "timestamp": "2007-05-08T22:14:22.007Z"
                }
            ],
            "count": 3487
        },
        "/location/location/time_zones": {
            "valuetype": "object",
            "values": [
                {
                    "text": "North American Eastern Time Zone",
                    "lang": "en",
                    "id": "/m/02hcv8",
                    "creator": "/user/mw_template_bot",
                    "timestamp": "2008-10-09T00:36:16.000Z"
                }
            ],
            "count": 1
        },
        "/location/place_with_neighborhoods/neighborhoods": {
            "valuetype": "object",
            "values": [
                {
                    "text": "Fitler Square",
                    "lang": "en",
                    "id": "/m/08474v",
                    "creator": "/user/anne8",
                    "timestamp": "2008-10-01T03:49:49.000Z"
                },
                {
                    "text": "Callowhill",
                    "lang": "en",
                    "id": "/m/07xm72",
                    "creator": "/user/anne8",
                    "timestamp": "2008-10-01T03:49:49.000Z"
                },
                {
                    "text": "Chinatown",
                    "lang": "en",
                    "id": "/m/076dyc",
                    "creator": "/user/anne8",
                    "timestamp": "2008-10-01T03:49:49.000Z"
                },
                {
                    "text": "Franklintown",
                    "lang": "en",
                    "id": "/m/0bz115",
                    "creator": "/user/anne8",
                    "timestamp": "2008-10-01T03:49:49.000Z"
                },
                {
                    "text": "Avenue of the Arts",
                    "lang": "en",
                    "id": "/m/07w978",
                    "creator": "/user/anne8",
                    "timestamp": "2008-10-01T03:49:49.000Z"
                },
                {
                    "text": "Rittenhouse Square",
                    "lang": "en",
                    "id": "/m/046m_j",
                    "creator": "/user/anne8",
                    "timestamp": "2008-10-01T03:49:49.001Z"
                },
                {
                    "text": "Market East",
                    "lang": "en",
                    "id": "/m/08rjxm",
                    "creator": "/user/anne8",
                    "timestamp": "2008-10-01T03:49:49.001Z"
                },
                {
                    "text": "Logan Square",
                    "lang": "en",
                    "id": "/m/0c39h5",
                    "creator": "/user/anne8",
                    "timestamp": "2008-10-01T03:49:49.001Z"
                },
                {
                    "text": "Old City",
                    "lang": "en",
                    "id": "/m/07hr1x",
                    "creator": "/user/anne8",
                    "timestamp": "2008-10-01T03:49:49.001Z"
                },
                {
                    "text": "Museum District",
                    "lang": "en",
                    "id": "/m/0bhknn",
                    "creator": "/user/anne8",
                    "timestamp": "2008-10-01T03:49:49.001Z"
                }
            ],
            "count": 125
        },
        "/location/statistical_region/population": {
            "valuetype": "compound",
            "values": [
                {
                    "text": "1688210 - 1980 - kconragan - Dated Integer",
                    "lang": "en",
                    "id": "/m/064htql",
                    "creator": "/user/kconragan",
                    "timestamp": "2009-06-18T19:32:48.000Z",
                    "property": {
                        "/measurement_unit/dated_integer/number": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "1688210",
                                    "lang": "en",
                                    "value": 1688210,
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/measurement_unit/dated_integer/year": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "1980",
                                    "lang": "",
                                    "value": "1980",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "kconragan",
                                    "lang": "en",
                                    "id": "/m/03nh2g5",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Dated Integer",
                                    "lang": "en",
                                    "id": "/measurement_unit/dated_integer",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.000Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                },
                {
                    "text": "1931334 - 1940 - kconragan - Dated Integer",
                    "lang": "en",
                    "id": "/m/064htqz",
                    "creator": "/user/kconragan",
                    "timestamp": "2009-06-18T19:32:48.001Z",
                    "property": {
                        "/measurement_unit/dated_integer/number": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "1931334",
                                    "lang": "en",
                                    "value": 1931334,
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/measurement_unit/dated_integer/year": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "1940",
                                    "lang": "",
                                    "value": "1940",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "kconragan",
                                    "lang": "en",
                                    "id": "/m/03nh2g5",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Dated Integer",
                                    "lang": "en",
                                    "id": "/measurement_unit/dated_integer",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.001Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                },
                {
                    "text": "1046964 - 1890 - kconragan - Dated Integer",
                    "lang": "en",
                    "id": "/m/064htqs",
                    "creator": "/user/kconragan",
                    "timestamp": "2009-06-18T19:32:48.001Z",
                    "property": {
                        "/measurement_unit/dated_integer/number": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "1046964",
                                    "lang": "en",
                                    "value": 1046964,
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/measurement_unit/dated_integer/year": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "1890",
                                    "lang": "",
                                    "value": "1890",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "kconragan",
                                    "lang": "en",
                                    "id": "/m/03nh2g5",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Dated Integer",
                                    "lang": "en",
                                    "id": "/measurement_unit/dated_integer",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.000Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                },
                {
                    "text": "1950961 - 1930 - kconragan - Dated Integer",
                    "lang": "en",
                    "id": "/m/064htrb",
                    "creator": "/user/kconragan",
                    "timestamp": "2009-06-18T19:32:48.002Z",
                    "property": {
                        "/measurement_unit/dated_integer/number": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "1950961",
                                    "lang": "en",
                                    "value": 1950961,
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.002Z"
                                }
                            ],
                            "count": 1
                        },
                        "/measurement_unit/dated_integer/year": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "1930",
                                    "lang": "",
                                    "value": "1930",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.002Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "kconragan",
                                    "lang": "en",
                                    "id": "/m/03nh2g5",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.002Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Dated Integer",
                                    "lang": "en",
                                    "id": "/measurement_unit/dated_integer",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.002Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                },
                {
                    "text": "63802 - 1820 - kconragan - Dated Integer",
                    "lang": "en",
                    "id": "/m/064htr4",
                    "creator": "/user/kconragan",
                    "timestamp": "2009-06-18T19:32:48.002Z",
                    "property": {
                        "/measurement_unit/dated_integer/number": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "63802",
                                    "lang": "en",
                                    "value": 63802,
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.002Z"
                                }
                            ],
                            "count": 1
                        },
                        "/measurement_unit/dated_integer/year": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "1820",
                                    "lang": "",
                                    "value": "1820",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "kconragan",
                                    "lang": "en",
                                    "id": "/m/03nh2g5",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Dated Integer",
                                    "lang": "en",
                                    "id": "/measurement_unit/dated_integer",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.002Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                },
                {
                    "text": "1948609 - 1970 - kconragan - Dated Integer",
                    "lang": "en",
                    "id": "/m/064htrj",
                    "creator": "/user/kconragan",
                    "timestamp": "2009-06-18T19:32:48.003Z",
                    "property": {
                        "/measurement_unit/dated_integer/number": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "1948609",
                                    "lang": "en",
                                    "value": 1948609,
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.003Z"
                                }
                            ],
                            "count": 1
                        },
                        "/measurement_unit/dated_integer/year": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "1970",
                                    "lang": "",
                                    "value": "1970",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.003Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "kconragan",
                                    "lang": "en",
                                    "id": "/m/03nh2g5",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.003Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Dated Integer",
                                    "lang": "en",
                                    "id": "/measurement_unit/dated_integer",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.003Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                },
                {
                    "text": "2071605 - 1950 - kconragan - Dated Integer",
                    "lang": "en",
                    "id": "/m/064htrx",
                    "creator": "/user/kconragan",
                    "timestamp": "2009-06-18T19:32:48.004Z",
                    "property": {
                        "/measurement_unit/dated_integer/number": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "2071605",
                                    "lang": "en",
                                    "value": 2071605,
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.004Z"
                                }
                            ],
                            "count": 1
                        },
                        "/measurement_unit/dated_integer/year": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "1950",
                                    "lang": "",
                                    "value": "1950",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.004Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "kconragan",
                                    "lang": "en",
                                    "id": "/m/03nh2g5",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.004Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Dated Integer",
                                    "lang": "en",
                                    "id": "/measurement_unit/dated_integer",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.004Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                },
                {
                    "text": "53722 - 1810 - kconragan - Dated Integer",
                    "lang": "en",
                    "id": "/m/064htrq",
                    "creator": "/user/kconragan",
                    "timestamp": "2009-06-18T19:32:48.004Z",
                    "property": {
                        "/measurement_unit/dated_integer/number": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "53722",
                                    "lang": "en",
                                    "value": 53722,
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.004Z"
                                }
                            ],
                            "count": 1
                        },
                        "/measurement_unit/dated_integer/year": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "1810",
                                    "lang": "",
                                    "value": "1810",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.003Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "kconragan",
                                    "lang": "en",
                                    "id": "/m/03nh2g5",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.003Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Dated Integer",
                                    "lang": "en",
                                    "id": "/measurement_unit/dated_integer",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.003Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                },
                {
                    "text": "41220 - 1800 - kconragan - Dated Integer",
                    "lang": "en",
                    "id": "/m/064hts8",
                    "creator": "/user/kconragan",
                    "timestamp": "2009-06-18T19:32:48.005Z",
                    "property": {
                        "/measurement_unit/dated_integer/number": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "41220",
                                    "lang": "en",
                                    "value": 41220,
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.005Z"
                                }
                            ],
                            "count": 1
                        },
                        "/measurement_unit/dated_integer/year": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "1800",
                                    "lang": "",
                                    "value": "1800",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.005Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "kconragan",
                                    "lang": "en",
                                    "id": "/m/03nh2g5",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.005Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Dated Integer",
                                    "lang": "en",
                                    "id": "/measurement_unit/dated_integer",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.005Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                },
                {
                    "text": "1293697 - 1900 - kconragan - Dated Integer",
                    "lang": "en",
                    "id": "/m/064htsg",
                    "creator": "/user/kconragan",
                    "timestamp": "2009-06-18T19:32:48.006Z",
                    "property": {
                        "/measurement_unit/dated_integer/number": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "1293697",
                                    "lang": "en",
                                    "value": 1293697,
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.006Z"
                                }
                            ],
                            "count": 1
                        },
                        "/measurement_unit/dated_integer/year": {
                            "valuetype": "datetime",
                            "values": [
                                {
                                    "text": "1900",
                                    "lang": "",
                                    "value": "1900",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.006Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "kconragan",
                                    "lang": "en",
                                    "id": "/m/03nh2g5",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.006Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Dated Integer",
                                    "lang": "en",
                                    "id": "/measurement_unit/dated_integer",
                                    "creator": "/user/kconragan",
                                    "timestamp": "2009-06-18T19:32:48.006Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                }
            ],
            "count": 64
        },
        "/olympics/olympic_bidding_city/olympics_bid_on": {
            "valuetype": "compound",
            "values": [
                {
                    "text": "1952 Summer Olympics - arielb - Olympic city bid",
                    "lang": "en",
                    "id": "/m/04dxtmd",
                    "creator": "/user/arielb",
                    "timestamp": "2008-07-26T22:36:46.002Z",
                    "property": {
                        "/olympics/olympic_city_bid/olympic_games": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "1952 Summer Olympics",
                                    "lang": "en",
                                    "id": "/m/0lgxj",
                                    "creator": "/user/arielb",
                                    "timestamp": "2008-07-26T22:36:46.002Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "arielb",
                                    "lang": "en",
                                    "id": "/m/022q37f",
                                    "creator": "/user/arielb",
                                    "timestamp": "2008-07-26T22:36:46.002Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Olympic city bid",
                                    "lang": "en",
                                    "id": "/olympics/olympic_city_bid",
                                    "creator": "/user/arielb",
                                    "timestamp": "2008-07-26T22:36:46.002Z"
                                }
                            ],
                            "count": 1
                        }
                    }
                }
            ],
            "count": 1
        },
        "/organization/organization_scope/organizations_with_this_scope": {
            "valuetype": "object",
            "values": [
                {
                    "text": "Pennsylvania Institute of Massage Therapy",
                    "lang": "en",
                    "id": "/m/0fq84yp",
                    "creator": "/user/quickwhitt",
                    "timestamp": "2010-12-17T05:00:35.000Z"
                },
                {
                    "text": "Newtown Termite & Pest Control",
                    "lang": "en",
                    "id": "/m/0g9ckk3",
                    "creator": "/user/quickwhitt",
                    "timestamp": "2011-02-01T22:16:36.000Z"
                },
                {
                    "text": "Hyland Graphics Design And Advertising",
                    "lang": "en",
                    "id": "/m/0q22bmp",
                    "creator": "/user/matthewbaron123",
                    "timestamp": "2013-01-31T19:47:36.000Z"
                }
            ],
            "count": 3
        },
        "/people/place_of_interment/interred_here": {
            "valuetype": "object",
            "values": [
                {
                    "text": "John Parke",
                    "lang": "en",
                    "id": "/m/03gkjy",
                    "creator": "/user/mw_template_bot",
                    "timestamp": "2008-10-09T04:28:37.000Z"
                },
                {
                    "text": "Frank Furness",
                    "lang": "en",
                    "id": "/m/01rd0g",
                    "creator": "/user/mw_template_bot",
                    "timestamp": "2008-11-26T23:16:16.000Z"
                },
                {
                    "text": "John Lafferty",
                    "lang": "en",
                    "id": "/m/0dhtfs",
                    "creator": "/user/mw_template_bot",
                    "timestamp": "2008-11-27T00:41:23.003Z"
                },
                {
                    "text": "John Joseph Abercrombie",
                    "lang": "en",
                    "id": "/m/0gqr9y",
                    "creator": "/user/mw_template_bot",
                    "timestamp": "2008-11-27T00:53:51.001Z"
                },
                {
                    "text": "Sidney George Fisher",
                    "lang": "en",
                    "id": "/m/04078qs",
                    "creator": "/user/mw_template_bot",
                    "timestamp": "2008-11-27T02:45:30.002Z"
                },
                {
                    "text": "Alexander Crawford",
                    "lang": "en",
                    "id": "/m/08vw1d",
                    "creator": "/user/mw_template_bot",
                    "timestamp": "2009-02-05T10:59:58.000Z"
                },
                {
                    "text": "Alphonse Girandy",
                    "lang": "en",
                    "id": "/m/027qdm5",
                    "creator": "/user/mw_template_bot",
                    "timestamp": "2009-02-05T11:54:13.000Z"
                },
                {
                    "text": "Jacob Zeilin",
                    "lang": "en",
                    "id": "/m/02pwr8",
                    "creator": "/user/mw_template_bot",
                    "timestamp": "2009-04-02T22:40:03.003Z"
                },
                {
                    "text": "Brigadier General Agnew",
                    "lang": "en",
                    "id": "/m/06cslt",
                    "creator": "/user/mw_template_bot",
                    "timestamp": "2009-04-02T22:52:20.004Z"
                },
                {
                    "text": "Samuel Gross",
                    "lang": "en",
                    "id": "/m/026hqpv",
                    "creator": "/user/mw_template_bot",
                    "timestamp": "2009-04-02T23:20:13.002Z"
                }
            ],
            "count": 37
        },
        "/periodicals/newspaper_circulation_area/newspapers": {
            "valuetype": "object",
            "values": [
                {
                    "text": "Political and Commercial Register",
                    "lang": "en",
                    "id": "/m/0c68t9k",
                    "creator": "/user/thadguidry",
                    "timestamp": "2010-06-28T17:07:35.000Z"
                },
                {
                    "text": "Northeast Times",
                    "lang": "en",
                    "id": "/m/03gstmm",
                    "creator": "/user/vivieradollosa",
                    "timestamp": "2012-01-16T12:39:33.000Z"
                },
                {
                    "text": "Philadelphia Daily News",
                    "lang": "en",
                    "id": "/m/06j_jh",
                    "creator": "/user/vivieradollosa",
                    "timestamp": "2012-01-16T12:40:30.000Z"
                },
                {
                    "text": "The Philadelphia Inquirer",
                    "lang": "en",
                    "id": "/m/0p_b7",
                    "creator": "/user/vivieradollosa",
                    "timestamp": "2012-01-16T12:40:50.000Z"
                },
                {
                    "text": "The A.V. Club",
                    "lang": "en",
                    "id": "/m/0c2r75",
                    "creator": "/user/rakshit",
                    "timestamp": "2012-01-31T06:27:07.000Z"
                },
                {
                    "text": "Philadelphia City Paper",
                    "lang": "en",
                    "id": "/m/053b4h",
                    "creator": "/user/jdeocampo",
                    "timestamp": "2012-01-31T17:13:10.000Z"
                },
                {
                    "text": "Philadelphia Weekly",
                    "lang": "en",
                    "id": "/m/0d9x7j",
                    "creator": "/user/rylait",
                    "timestamp": "2012-02-01T05:49:35.000Z"
                },
                {
                    "text": "The Jewish Exponent",
                    "lang": "en",
                    "id": "/m/0dtk55",
                    "creator": "/user/renus",
                    "timestamp": "2012-02-01T07:09:50.000Z"
                },
                {
                    "text": "Public Ledger",
                    "lang": "en",
                    "id": "/m/02x9l6c",
                    "creator": "/user/fresurreccion",
                    "timestamp": "2012-02-01T08:19:53.000Z"
                },
                {
                    "text": "Philadelphia Bulletin",
                    "lang": "en",
                    "id": "/m/07tjt7",
                    "creator": "/user/rylait",
                    "timestamp": "2012-02-01T09:52:03.000Z"
                }
            ],
            "count": 26
        },
        "/sports/sports_team_location/teams": {
            "valuetype": "object",
            "values": [
                {
                    "text": "Philadelphia Phillies",
                    "lang": "en",
                    "id": "/m/05xvj",
                    "creator": "/user/dm_wikipedia_loader",
                    "timestamp": "2007-04-03T20:53:24.009Z"
                },
                {
                    "text": "Philadelphia Eagles",
                    "lang": "en",
                    "id": "/m/05tg3",
                    "creator": "/user/dm_wikipedia_loader",
                    "timestamp": "2007-04-03T21:38:41.000Z"
                },
                {
                    "text": "Philadelphia 76ers",
                    "lang": "en",
                    "id": "/m/0jm4v",
                    "creator": "/user/dm_wikipedia_loader",
                    "timestamp": "2007-04-03T22:17:01.001Z"
                },
                {
                    "text": "Philadelphia Flyers",
                    "lang": "en",
                    "id": "/m/0hn2q",
                    "creator": "/user/dm_wikipedia_loader",
                    "timestamp": "2007-04-03T23:14:47.008Z"
                },
                {
                    "text": "Philadelphia Firebirds",
                    "lang": "en",
                    "id": "/m/0crmdl",
                    "creator": "/user/pipeline",
                    "timestamp": "2008-04-25T03:14:29.004Z"
                },
                {
                    "text": "Philadelphia Ramblers",
                    "lang": "en",
                    "id": "/m/0g3l67",
                    "creator": "/user/mw_template_bot",
                    "timestamp": "2008-07-18T11:24:06.000Z"
                },
                {
                    "text": "Philadelphia Rockets",
                    "lang": "en",
                    "id": "/m/02pf022",
                    "creator": "/user/mw_template_bot",
                    "timestamp": "2008-07-18T16:56:37.001Z"
                },
                {
                    "text": "Blazers/Cowboys",
                    "lang": "en",
                    "id": "/m/068pwm",
                    "creator": "/user/mw_template_bot",
                    "timestamp": "2008-10-09T05:20:54.000Z"
                },
                {
                    "text": "Philadelphia Wings",
                    "lang": "en",
                    "id": "/m/01knd4",
                    "creator": "/user/skud",
                    "timestamp": "2008-10-23T21:31:26.000Z"
                },
                {
                    "text": "La Salle Explorers men's basketball",
                    "lang": "en",
                    "id": "/m/0280kbv",
                    "creator": "/user/deleted_08_29_2011_01",
                    "timestamp": "2009-02-15T19:45:42.000Z"
                }
            ],
            "count": 12
        },
        "/travel/travel_destination/climate": {
            "valuetype": "compound",
            "values": [
                {
                    "text": "4.0 - -4.0 - 81 - January - libbys - Travel destination monthly climate",
                    "lang": "en",
                    "id": "/m/052t13x",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:18:17.005Z",
                    "property": {
                        "/travel/travel_destination_monthly_climate/average_max_temp_c": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "4.0",
                                    "lang": "en",
                                    "value": 4,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.005Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/average_min_temp_c": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "-4.0",
                                    "lang": "en",
                                    "value": -4,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.004Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/average_rainfall_mm": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "81",
                                    "lang": "en",
                                    "value": 81,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.005Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/month": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "January",
                                    "lang": "en",
                                    "id": "/m/03_ly",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.005Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "libbys",
                                    "lang": "en",
                                    "id": "/m/04jsdng",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.004Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Travel destination monthly climate",
                                    "lang": "en",
                                    "id": "/travel/travel_destination_monthly_climate",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.004Z"
                                },
                                {
                                    "text": "Topic",
                                    "lang": "en",
                                    "id": "/common/topic",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.004Z"
                                }
                            ],
                            "count": 2
                        }
                    }
                },
                {
                    "text": "6.0 - -3.0 - 71 - February - libbys - Travel destination monthly climate",
                    "lang": "en",
                    "id": "/m/052t159",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:18:17.009Z",
                    "property": {
                        "/travel/travel_destination_monthly_climate/average_max_temp_c": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "6.0",
                                    "lang": "en",
                                    "value": 6,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.009Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/average_min_temp_c": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "-3.0",
                                    "lang": "en",
                                    "value": -3,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.009Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/average_rainfall_mm": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "71",
                                    "lang": "en",
                                    "value": 71,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.009Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/month": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "February",
                                    "lang": "en",
                                    "id": "/m/02xx5",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.009Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "libbys",
                                    "lang": "en",
                                    "id": "/m/04jsdng",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.009Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Travel destination monthly climate",
                                    "lang": "en",
                                    "id": "/travel/travel_destination_monthly_climate",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.009Z"
                                },
                                {
                                    "text": "Topic",
                                    "lang": "en",
                                    "id": "/common/topic",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.009Z"
                                }
                            ],
                            "count": 2
                        }
                    }
                },
                {
                    "text": "10.0 - 1.0 - 94 - March - libbys - Topic",
                    "lang": "en",
                    "id": "/m/052t145",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:18:17.006Z",
                    "property": {
                        "/travel/travel_destination_monthly_climate/average_max_temp_c": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "10.0",
                                    "lang": "en",
                                    "value": 10,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.006Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/average_min_temp_c": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "1.0",
                                    "lang": "en",
                                    "value": 1,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.005Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/average_rainfall_mm": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "94",
                                    "lang": "en",
                                    "value": 94,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.005Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/month": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "March",
                                    "lang": "en",
                                    "id": "/m/04wzr",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.006Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "libbys",
                                    "lang": "en",
                                    "id": "/m/04jsdng",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.005Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Topic",
                                    "lang": "en",
                                    "id": "/common/topic",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.005Z"
                                },
                                {
                                    "text": "Travel destination monthly climate",
                                    "lang": "en",
                                    "id": "/travel/travel_destination_monthly_climate",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.005Z"
                                }
                            ],
                            "count": 2
                        }
                    }
                },
                {
                    "text": "17.0 - 6.0 - 86 - April - libbys - Travel destination monthly climate",
                    "lang": "en",
                    "id": "/m/052t12s",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:18:17.001Z",
                    "property": {
                        "/travel/travel_destination_monthly_climate/average_max_temp_c": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "17.0",
                                    "lang": "en",
                                    "value": 17,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/average_min_temp_c": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "6.0",
                                    "lang": "en",
                                    "value": 6,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/average_rainfall_mm": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "86",
                                    "lang": "en",
                                    "value": 86,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/month": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "April",
                                    "lang": "en",
                                    "id": "/m/0lkm",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "libbys",
                                    "lang": "en",
                                    "id": "/m/04jsdng",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Travel destination monthly climate",
                                    "lang": "en",
                                    "id": "/travel/travel_destination_monthly_climate",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.001Z"
                                },
                                {
                                    "text": "Topic",
                                    "lang": "en",
                                    "id": "/common/topic",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.001Z"
                                }
                            ],
                            "count": 2
                        }
                    }
                },
                {
                    "text": "23.0 - 12.0 - 91 - May - libbys - Topic",
                    "lang": "en",
                    "id": "/m/052t15l",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:18:17.010Z",
                    "property": {
                        "/travel/travel_destination_monthly_climate/average_max_temp_c": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "23.0",
                                    "lang": "en",
                                    "value": 23,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.010Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/average_min_temp_c": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "12.0",
                                    "lang": "en",
                                    "value": 12,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.010Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/average_rainfall_mm": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "91",
                                    "lang": "en",
                                    "value": 91,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.010Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/month": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "May",
                                    "lang": "en",
                                    "id": "/m/04w_7",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.010Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "libbys",
                                    "lang": "en",
                                    "id": "/m/04jsdng",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.009Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Topic",
                                    "lang": "en",
                                    "id": "/common/topic",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.010Z"
                                },
                                {
                                    "text": "Travel destination monthly climate",
                                    "lang": "en",
                                    "id": "/travel/travel_destination_monthly_climate",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.010Z"
                                }
                            ],
                            "count": 2
                        }
                    }
                },
                {
                    "text": "28.0 - 16.0 - 86 - June - libbys - Topic",
                    "lang": "en",
                    "id": "/m/052t13m",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:18:17.004Z",
                    "property": {
                        "/travel/travel_destination_monthly_climate/average_max_temp_c": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "28.0",
                                    "lang": "en",
                                    "value": 28,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.004Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/average_min_temp_c": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "16.0",
                                    "lang": "en",
                                    "value": 16,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.004Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/average_rainfall_mm": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "86",
                                    "lang": "en",
                                    "value": 86,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.004Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/month": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "June",
                                    "lang": "en",
                                    "id": "/m/040fb",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.004Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "libbys",
                                    "lang": "en",
                                    "id": "/m/04jsdng",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.003Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Topic",
                                    "lang": "en",
                                    "id": "/common/topic",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.003Z"
                                },
                                {
                                    "text": "Travel destination monthly climate",
                                    "lang": "en",
                                    "id": "/travel/travel_destination_monthly_climate",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.003Z"
                                }
                            ],
                            "count": 2
                        }
                    }
                },
                {
                    "text": "30.0 - 20.0 - 107 - July - libbys - Travel destination monthly climate",
                    "lang": "en",
                    "id": "/m/052t14r",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:18:17.008Z",
                    "property": {
                        "/travel/travel_destination_monthly_climate/average_max_temp_c": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "30.0",
                                    "lang": "en",
                                    "value": 30,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.007Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/average_min_temp_c": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "20.0",
                                    "lang": "en",
                                    "value": 20,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.007Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/average_rainfall_mm": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "107",
                                    "lang": "en",
                                    "value": 107,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.007Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/month": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "July",
                                    "lang": "en",
                                    "id": "/m/040fv",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.007Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "libbys",
                                    "lang": "en",
                                    "id": "/m/04jsdng",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.007Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Travel destination monthly climate",
                                    "lang": "en",
                                    "id": "/travel/travel_destination_monthly_climate",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.007Z"
                                },
                                {
                                    "text": "Topic",
                                    "lang": "en",
                                    "id": "/common/topic",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.007Z"
                                }
                            ],
                            "count": 2
                        }
                    }
                },
                {
                    "text": "29.0 - 19.0 - 99 - August - libbys - Travel destination monthly climate",
                    "lang": "en",
                    "id": "/m/052t12h",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:18:17.000Z",
                    "property": {
                        "/travel/travel_destination_monthly_climate/average_max_temp_c": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "29.0",
                                    "lang": "en",
                                    "value": 29,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/average_min_temp_c": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "19.0",
                                    "lang": "en",
                                    "value": 19,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/average_rainfall_mm": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "99",
                                    "lang": "en",
                                    "value": 99,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/month": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "August",
                                    "lang": "en",
                                    "id": "/m/0ll3",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "libbys",
                                    "lang": "en",
                                    "id": "/m/04jsdng",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Travel destination monthly climate",
                                    "lang": "en",
                                    "id": "/travel/travel_destination_monthly_climate",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.000Z"
                                },
                                {
                                    "text": "Topic",
                                    "lang": "en",
                                    "id": "/common/topic",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.000Z"
                                }
                            ],
                            "count": 2
                        }
                    }
                },
                {
                    "text": "25.0 - 15.0 - 84 - September - libbys - Topic",
                    "lang": "en",
                    "id": "/m/052t150",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:18:17.008Z",
                    "property": {
                        "/travel/travel_destination_monthly_climate/average_max_temp_c": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "25.0",
                                    "lang": "en",
                                    "value": 25,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.008Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/average_min_temp_c": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "15.0",
                                    "lang": "en",
                                    "value": 15,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.008Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/average_rainfall_mm": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "84",
                                    "lang": "en",
                                    "value": 84,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.008Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/month": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "September",
                                    "lang": "en",
                                    "id": "/m/06vkl",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.008Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "libbys",
                                    "lang": "en",
                                    "id": "/m/04jsdng",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.008Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Topic",
                                    "lang": "en",
                                    "id": "/common/topic",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.008Z"
                                },
                                {
                                    "text": "Travel destination monthly climate",
                                    "lang": "en",
                                    "id": "/travel/travel_destination_monthly_climate",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.008Z"
                                }
                            ],
                            "count": 2
                        }
                    }
                },
                {
                    "text": "19.0 - 8.0 - 69 - October - libbys - Topic",
                    "lang": "en",
                    "id": "/m/052t14g",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:18:17.007Z",
                    "property": {
                        "/travel/travel_destination_monthly_climate/average_max_temp_c": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "19.0",
                                    "lang": "en",
                                    "value": 19,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.007Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/average_min_temp_c": {
                            "valuetype": "float",
                            "values": [
                                {
                                    "text": "8.0",
                                    "lang": "en",
                                    "value": 8,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.006Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/average_rainfall_mm": {
                            "valuetype": "int",
                            "values": [
                                {
                                    "text": "69",
                                    "lang": "en",
                                    "value": 69,
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.006Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/travel_destination_monthly_climate/month": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "October",
                                    "lang": "en",
                                    "id": "/m/05lf_",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.006Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "libbys",
                                    "lang": "en",
                                    "id": "/m/04jsdng",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.006Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Topic",
                                    "lang": "en",
                                    "id": "/common/topic",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.006Z"
                                },
                                {
                                    "text": "Travel destination monthly climate",
                                    "lang": "en",
                                    "id": "/travel/travel_destination_monthly_climate",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:18:17.006Z"
                                }
                            ],
                            "count": 2
                        }
                    }
                }
            ],
            "count": 12
        },
        "/travel/travel_destination/how_to_get_here": {
            "valuetype": "compound",
            "values": [
                {
                    "text": "Train - Amtrak - 30th Street Station - libbys - Transportation",
                    "lang": "en",
                    "id": "/m/052t09s",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T02:58:14.001Z",
                    "property": {
                        "/travel/transportation/mode_of_transportation": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Train",
                                    "lang": "en",
                                    "id": "/m/07jdr",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:14.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/transportation/transport_operator": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Amtrak",
                                    "lang": "en",
                                    "id": "/m/0dn_w",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:14.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/transportation/transport_terminus": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "30th Street Station",
                                    "lang": "en",
                                    "id": "/m/01xsp_",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:14.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "libbys",
                                    "lang": "en",
                                    "id": "/m/04jsdng",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:14.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Transportation",
                                    "lang": "en",
                                    "id": "/travel/transportation",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:14.000Z"
                                },
                                {
                                    "text": "Topic",
                                    "lang": "en",
                                    "id": "/common/topic",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:14.000Z"
                                }
                            ],
                            "count": 2
                        }
                    }
                },
                {
                    "text": "Bus - Apex Bus - 121 N. 11th Street - libbys - Transportation",
                    "lang": "en",
                    "id": "/m/052t0b3",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T02:58:14.003Z",
                    "property": {
                        "/travel/transportation/mode_of_transportation": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Bus",
                                    "lang": "en",
                                    "id": "/m/01bjv",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:14.003Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/transportation/transport_operator": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Apex Bus",
                                    "lang": "en",
                                    "id": "/m/052t0bm",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:14.003Z"
                                },
                                {
                                    "text": "Today's Bus",
                                    "lang": "en",
                                    "id": "/m/052t0bd",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:14.002Z"
                                }
                            ],
                            "count": 2
                        },
                        "/travel/transportation/transport_terminus": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "121 N. 11th Street",
                                    "lang": "en",
                                    "id": "/m/052t0b5",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:14.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "libbys",
                                    "lang": "en",
                                    "id": "/m/04jsdng",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:14.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Transportation",
                                    "lang": "en",
                                    "id": "/travel/transportation",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:14.003Z"
                                },
                                {
                                    "text": "Topic",
                                    "lang": "en",
                                    "id": "/common/topic",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:14.003Z"
                                }
                            ],
                            "count": 2
                        }
                    }
                },
                {
                    "text": "Bus - New Century Travel - 55 N. 11th Street - libbys - Topic",
                    "lang": "en",
                    "id": "/m/052t0bz",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T02:58:14.005Z",
                    "property": {
                        "/travel/transportation/mode_of_transportation": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Bus",
                                    "lang": "en",
                                    "id": "/m/01bjv",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:14.005Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/transportation/transport_operator": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "New Century Travel",
                                    "lang": "en",
                                    "id": "/m/0520j5g",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:14.004Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/transportation/transport_terminus": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "55 N. 11th Street",
                                    "lang": "en",
                                    "id": "/m/052t0c0",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:14.004Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "libbys",
                                    "lang": "en",
                                    "id": "/m/04jsdng",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:14.003Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Topic",
                                    "lang": "en",
                                    "id": "/common/topic",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:14.005Z"
                                },
                                {
                                    "text": "Transportation",
                                    "lang": "en",
                                    "id": "/travel/transportation",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:14.005Z"
                                }
                            ],
                            "count": 2
                        }
                    }
                },
                {
                    "text": "Air travel - Philadelphia International Airport - libbys - Topic",
                    "lang": "en",
                    "id": "/m/052t0cg",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T02:58:15.000Z",
                    "property": {
                        "/travel/transportation/mode_of_transportation": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Air travel",
                                    "lang": "en",
                                    "id": "/m/025t3bg",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:15.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/transportation/transport_terminus": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Philadelphia International Airport",
                                    "lang": "en",
                                    "id": "/m/01mz5z",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:15.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "libbys",
                                    "lang": "en",
                                    "id": "/m/04jsdng",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:15.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Topic",
                                    "lang": "en",
                                    "id": "/common/topic",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:15.000Z"
                                },
                                {
                                    "text": "Transportation",
                                    "lang": "en",
                                    "id": "/travel/transportation",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T02:58:15.000Z"
                                }
                            ],
                            "count": 2
                        }
                    }
                },
                {
                    "text": "Bus - BoltBus - 30th Street Station - libbys - Transportation",
                    "lang": "en",
                    "id": "/m/052t0j2",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:00:07.001Z",
                    "property": {
                        "/travel/transportation/mode_of_transportation": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Bus",
                                    "lang": "en",
                                    "id": "/m/01bjv",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:00:07.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/transportation/transport_operator": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "BoltBus",
                                    "lang": "en",
                                    "id": "/m/03yk4dv",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:00:07.000Z"
                                },
                                {
                                    "text": "Megabus",
                                    "lang": "en",
                                    "id": "/m/04jc4w2",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:00:07.000Z"
                                }
                            ],
                            "count": 2
                        },
                        "/travel/transportation/transport_terminus": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "30th Street Station",
                                    "lang": "en",
                                    "id": "/m/01xsp_",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:00:07.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "libbys",
                                    "lang": "en",
                                    "id": "/m/04jsdng",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:00:07.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Transportation",
                                    "lang": "en",
                                    "id": "/travel/transportation",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:00:07.000Z"
                                },
                                {
                                    "text": "Topic",
                                    "lang": "en",
                                    "id": "/common/topic",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:00:07.000Z"
                                }
                            ],
                            "count": 2
                        }
                    }
                },
                {
                    "text": "Bus - Greyhound Lines - 1001 Filbert - libbys - Transportation",
                    "lang": "en",
                    "id": "/m/052t0kc",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:00:38.001Z",
                    "property": {
                        "/travel/transportation/mode_of_transportation": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Bus",
                                    "lang": "en",
                                    "id": "/m/01bjv",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:00:38.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/transportation/transport_operator": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Greyhound Lines",
                                    "lang": "en",
                                    "id": "/m/02959z",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:00:38.001Z"
                                }
                            ],
                            "count": 1
                        },
                        "/travel/transportation/transport_terminus": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "1001 Filbert",
                                    "lang": "en",
                                    "id": "/m/052t0kf",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:00:38.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/attribution": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "libbys",
                                    "lang": "en",
                                    "id": "/m/04jsdng",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:00:38.000Z"
                                }
                            ],
                            "count": 1
                        },
                        "/type/object/type": {
                            "valuetype": "object",
                            "values": [
                                {
                                    "text": "Transportation",
                                    "lang": "en",
                                    "id": "/travel/transportation",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:00:38.001Z"
                                },
                                {
                                    "text": "Topic",
                                    "lang": "en",
                                    "id": "/common/topic",
                                    "creator": "/user/libbys",
                                    "timestamp": "2008-12-31T03:00:38.001Z"
                                }
                            ],
                            "count": 2
                        }
                    }
                }
            ],
            "count": 6
        },
        "/travel/travel_destination/local_transportation": {
            "valuetype": "object",
            "values": [
                {
                    "text": "Freedom Ferry",
                    "lang": "en",
                    "id": "/m/052t0rj",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:05:52.000Z"
                },
                {
                    "text": "PATCO Speedline",
                    "lang": "en",
                    "id": "/m/028nd0",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:05:52.000Z"
                },
                {
                    "text": "SEPTA Regional Rail",
                    "lang": "en",
                    "id": "/m/04_7pt",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:05:52.000Z"
                },
                {
                    "text": "RiverLink Ferry",
                    "lang": "en",
                    "id": "/m/02z4ddc",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:05:52.000Z"
                },
                {
                    "text": "SEPTA Subway–Surface Trolley Lines",
                    "lang": "en",
                    "id": "/m/065r7s",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:05:52.001Z"
                },
                {
                    "text": "River Line",
                    "lang": "en",
                    "id": "/m/02tdf2",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:05:52.001Z"
                },
                {
                    "text": "SEPTA City Transit Division surface routes",
                    "lang": "en",
                    "id": "/m/0284x9h",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:05:52.001Z"
                }
            ],
            "count": 7
        },
        "/travel/travel_destination/tourist_attractions": {
            "valuetype": "object",
            "values": [
                {
                    "text": "African American Museum in Philadelphia",
                    "lang": "en",
                    "id": "/m/09qvxj",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:11:56.000Z"
                },
                {
                    "text": "Liberty Bell",
                    "lang": "en",
                    "id": "/m/012h3h",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:11:56.000Z"
                },
                {
                    "text": "Independence Hall",
                    "lang": "en",
                    "id": "/m/01_yh5",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:11:56.000Z"
                },
                {
                    "text": "Rodin Museum",
                    "lang": "en",
                    "id": "/m/0bhbkg",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:11:56.001Z"
                },
                {
                    "text": "Franklin Institute",
                    "lang": "en",
                    "id": "/m/01h123",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:11:56.001Z"
                },
                {
                    "text": "Reading Terminal Market",
                    "lang": "en",
                    "id": "/m/06lbq9",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:11:57.000Z"
                },
                {
                    "text": "Academy of Natural Sciences",
                    "lang": "en",
                    "id": "/m/02xktz",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:11:57.000Z"
                },
                {
                    "text": "Philadelphia Zoo",
                    "lang": "en",
                    "id": "/m/02dqlt",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:11:57.000Z"
                },
                {
                    "text": "Boathouse Row",
                    "lang": "en",
                    "id": "/m/07k9rg",
                    "creator": "/user/libbys",
                    "timestamp": "2008-12-31T03:11:57.000Z"
                },
                {
                    "text": "Wagner Free Institute of Science",
                    "lang": "en",
                    "id": "/m/077pcr",
                    "creator": "/user/supergmackenz",
                    "timestamp": "2011-12-13T18:45:19.001Z"
                }
            ],
            "count": 23
        },
        "/type/object/attribution": {
            "valuetype": "object",
            "values": [
                {
                    "text": "Freebase Data Team",
                    "lang": "en",
                    "id": "/m/075nggs",
                    "creator": "/user/book_bot",
                    "timestamp": "2009-08-24T23:31:30.001Z"
                }
            ],
            "count": 1
        },
        "/type/object/key": {
            "valuetype": "key",
            "values": [
                {
                    "text": "/wikipedia/en_id/50585",
                    "lang": "",
                    "value": "/wikipedia/en_id/50585",
                    "creator": "/user/metaweb",
                    "timestamp": "2006-10-22T09:54:11.007Z"
                },
                {
                    "text": "/user/metaweb/datasource/geonames/4560349",
                    "lang": "",
                    "value": "/user/metaweb/datasource/geonames/4560349",
                    "creator": "/user/mwcl_geonames",
                    "timestamp": "2007-03-22T21:11:07.006Z"
                },
                {
                    "text": "/authority/gnis/1209052",
                    "lang": "",
                    "value": "/authority/gnis/1209052",
                    "creator": "/user/gnis_bot",
                    "timestamp": "2008-08-18T16:44:55.004Z"
                },
                {
                    "text": "/en/philadelphia",
                    "lang": "",
                    "value": "/en/philadelphia",
                    "creator": "/user/topicns_loader",
                    "timestamp": "2008-12-11T23:41:57.000Z"
                },
                {
                    "text": "/authority/daylife/topic/0f72c1xaIv8qq",
                    "lang": "",
                    "value": "/authority/daylife/topic/0f72c1xaIv8qq",
                    "creator": "/user/linkbot",
                    "timestamp": "2009-11-30T21:43:01.000Z"
                },
                {
                    "text": "/authority/hud/countyplace/425451",
                    "lang": "",
                    "value": "/authority/hud/countyplace/425451",
                    "creator": "/user/mw_od_bot",
                    "timestamp": "2010-01-05T17:48:03.000Z"
                },
                {
                    "text": "/user/jamie/nytdataid/67211727016270419451",
                    "lang": "",
                    "value": "/user/jamie/nytdataid/67211727016270419451",
                    "creator": "/user/ejt_bot",
                    "timestamp": "2010-01-20T22:03:03.000Z"
                },
                {
                    "text": "/wikipedia/fr/Philadelphie",
                    "lang": "",
                    "value": "/wikipedia/fr/Philadelphie",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-25T20:52:42.000Z"
                },
                {
                    "text": "/wikipedia/pt_id/39266",
                    "lang": "",
                    "value": "/wikipedia/pt_id/39266",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-25T20:52:42.000Z"
                },
                {
                    "text": "/wikipedia/de/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/de/Philadelphia",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-26T01:44:53.000Z"
                },
                {
                    "text": "/wikipedia/pt/Filad$00E9lfia",
                    "lang": "",
                    "value": "/wikipedia/pt/Filad$00E9lfia",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-26T03:21:28.000Z"
                },
                {
                    "text": "/wikipedia/ja_id/38084",
                    "lang": "",
                    "value": "/wikipedia/ja_id/38084",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-26T06:33:06.001Z"
                },
                {
                    "text": "/wikipedia/ja/$30D5$30A3$30E9$30C7$30EB$30D5$30A3$30A2",
                    "lang": "",
                    "value": "/wikipedia/ja/$30D5$30A3$30E9$30C7$30EB$30D5$30A3$30A2",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-26T08:07:44.000Z"
                },
                {
                    "text": "/wikipedia/ru/$0424$0438$043B$0430$0434$0435$043B$044C$0444$0438$044F",
                    "lang": "",
                    "value": "/wikipedia/ru/$0424$0438$043B$0430$0434$0435$043B$044C$0444$0438$044F",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-26T19:31:49.000Z"
                },
                {
                    "text": "/wikipedia/de_id/44481",
                    "lang": "",
                    "value": "/wikipedia/de_id/44481",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-27T10:07:51.000Z"
                },
                {
                    "text": "/wikipedia/ru_id/54985",
                    "lang": "",
                    "value": "/wikipedia/ru_id/54985",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-27T11:42:35.000Z"
                },
                {
                    "text": "/wikipedia/it/Filadelfia_$0028Pennsylvania$0029",
                    "lang": "",
                    "value": "/wikipedia/it/Filadelfia_$0028Pennsylvania$0029",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-27T23:49:59.000Z"
                },
                {
                    "text": "/wikipedia/bg_id/58161",
                    "lang": "",
                    "value": "/wikipedia/bg_id/58161",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-28T11:41:34.000Z"
                },
                {
                    "text": "/wikipedia/it_id/18560",
                    "lang": "",
                    "value": "/wikipedia/it_id/18560",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-28T23:45:43.001Z"
                },
                {
                    "text": "/wikipedia/es_id/13419",
                    "lang": "",
                    "value": "/wikipedia/es_id/13419",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-29T03:15:22.000Z"
                },
                {
                    "text": "/wikipedia/bg/$0424$0438$043B$0430$0434$0435$043B$0444$0438$044F",
                    "lang": "",
                    "value": "/wikipedia/bg/$0424$0438$043B$0430$0434$0435$043B$0444$0438$044F",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-29T09:37:21.000Z"
                },
                {
                    "text": "/wikipedia/fr_id/66438",
                    "lang": "",
                    "value": "/wikipedia/fr_id/66438",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-29T11:12:30.000Z"
                },
                {
                    "text": "/wikipedia/es/Filadelfia",
                    "lang": "",
                    "value": "/wikipedia/es/Filadelfia",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2010-09-29T13:58:44.001Z"
                },
                {
                    "text": "/wikipedia/ja_title/$30D5$30A3$30E9$30C7$30EB$30D5$30A3$30A2",
                    "lang": "",
                    "value": "/wikipedia/ja_title/$30D5$30A3$30E9$30C7$30EB$30D5$30A3$30A2",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2011-05-21T14:30:27.001Z"
                },
                {
                    "text": "/wikipedia/es_title/Filadelfia",
                    "lang": "",
                    "value": "/wikipedia/es_title/Filadelfia",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2011-05-21T15:23:53.001Z"
                },
                {
                    "text": "/wikipedia/it_title/Filadelfia_$0028Pennsylvania$0029",
                    "lang": "",
                    "value": "/wikipedia/it_title/Filadelfia_$0028Pennsylvania$0029",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2011-05-22T07:07:26.000Z"
                },
                {
                    "text": "/wikipedia/pt_title/Filad$00E9lfia",
                    "lang": "",
                    "value": "/wikipedia/pt_title/Filad$00E9lfia",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2011-05-22T08:51:52.000Z"
                },
                {
                    "text": "/wikipedia/ru_title/$0424$0438$043B$0430$0434$0435$043B$044C$0444$0438$044F",
                    "lang": "",
                    "value": "/wikipedia/ru_title/$0424$0438$043B$0430$0434$0435$043B$044C$0444$0438$044F",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2011-05-22T12:31:41.000Z"
                },
                {
                    "text": "/wikipedia/de_title/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/de_title/Philadelphia",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2011-05-23T00:21:52.000Z"
                },
                {
                    "text": "/wikipedia/fr_title/Philadelphie",
                    "lang": "",
                    "value": "/wikipedia/fr_title/Philadelphie",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2011-05-23T17:18:41.001Z"
                },
                {
                    "text": "/wikipedia/en_title/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/en_title/Philadelphia",
                    "creator": "/user/mwcl_wikipedia_en",
                    "timestamp": "2011-05-24T04:27:41.000Z"
                },
                {
                    "text": "/wikipedia/bg_title/$0424$0438$043B$0430$0434$0435$043B$0444$0438$044F",
                    "lang": "",
                    "value": "/wikipedia/bg_title/$0424$0438$043B$0430$0434$0435$043B$0444$0438$044F",
                    "creator": "/user/wikipedia_intl",
                    "timestamp": "2011-05-25T03:41:28.000Z"
                },
                {
                    "text": "/base/ranker/rankerurlname/philadelphia$002F1792338",
                    "lang": "",
                    "value": "/base/ranker/rankerurlname/philadelphia$002F1792338",
                    "creator": "/user/ravi_ranker",
                    "timestamp": "2011-11-23T23:51:05.000Z"
                },
                {
                    "text": "/authority/nist/fips/55/4260000",
                    "lang": "",
                    "value": "/authority/nist/fips/55/4260000",
                    "creator": "/user/ovalmeta",
                    "timestamp": "2011-12-05T02:31:04.000Z"
                },
                {
                    "text": "/authority/stanford/place/Philadelphia",
                    "lang": "",
                    "value": "/authority/stanford/place/Philadelphia",
                    "creator": "/user/merge_bot",
                    "timestamp": "2012-01-18T18:16:45.000Z"
                },
                {
                    "text": "/wikipedia/pt/Philadelphia$002C_Pennsylvania",
                    "lang": "",
                    "value": "/wikipedia/pt/Philadelphia$002C_Pennsylvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:50:29.000Z"
                },
                {
                    "text": "/wikipedia/ar/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/ar/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:50:43.000Z"
                },
                {
                    "text": "/wikipedia/zh-cn/$8CBB$57CE$5E02",
                    "lang": "",
                    "value": "/wikipedia/zh-cn/$8CBB$57CE$5E02",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:51:03.000Z"
                },
                {
                    "text": "/wikipedia/tr_id/51407",
                    "lang": "",
                    "value": "/wikipedia/tr_id/51407",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:51:06.000Z"
                },
                {
                    "text": "/wikipedia/zh-cn/$8D39$57CE",
                    "lang": "",
                    "value": "/wikipedia/zh-cn/$8D39$57CE",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:51:13.000Z"
                },
                {
                    "text": "/wikipedia/sr/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/sr/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:51:32.000Z"
                },
                {
                    "text": "/wikipedia/fi_title/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/fi_title/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:51:35.000Z"
                },
                {
                    "text": "/wikipedia/vi/Philadelphia$002C_Pennsylvania",
                    "lang": "",
                    "value": "/wikipedia/vi/Philadelphia$002C_Pennsylvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:51:37.000Z"
                },
                {
                    "text": "/wikipedia/ca/Filad$00E8lfia",
                    "lang": "",
                    "value": "/wikipedia/ca/Filad$00E8lfia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:51:39.000Z"
                },
                {
                    "text": "/wikipedia/sl/Philadelphia$002C_Pennsylvania",
                    "lang": "",
                    "value": "/wikipedia/sl/Philadelphia$002C_Pennsylvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:51:45.000Z"
                },
                {
                    "text": "/wikipedia/es/Filadelfia_Pensilvania",
                    "lang": "",
                    "value": "/wikipedia/es/Filadelfia_Pensilvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:51:47.000Z"
                },
                {
                    "text": "/wikipedia/th_id/183113",
                    "lang": "",
                    "value": "/wikipedia/th_id/183113",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:51:57.000Z"
                },
                {
                    "text": "/wikipedia/ca_title/Filad$00E8lfia",
                    "lang": "",
                    "value": "/wikipedia/ca_title/Filad$00E8lfia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:51:59.000Z"
                },
                {
                    "text": "/wikipedia/es/Filadelfia_$0028EE_UU_$0029",
                    "lang": "",
                    "value": "/wikipedia/es/Filadelfia_$0028EE_UU_$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:52:04.000Z"
                },
                {
                    "text": "/wikipedia/sv/Philadelphia$002C_PA",
                    "lang": "",
                    "value": "/wikipedia/sv/Philadelphia$002C_PA",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:52:11.000Z"
                },
                {
                    "text": "/wikipedia/ar/$0641$064A$0644$0627$062F$0644$064A$0641$0627",
                    "lang": "",
                    "value": "/wikipedia/ar/$0641$064A$0644$0627$062F$0644$064A$0641$0627",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:52:11.000Z"
                },
                {
                    "text": "/wikipedia/es/Philadelphia$002C_Pennsylvania",
                    "lang": "",
                    "value": "/wikipedia/es/Philadelphia$002C_Pennsylvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:52:12.000Z"
                },
                {
                    "text": "/wikipedia/pl/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/pl/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:52:19.000Z"
                },
                {
                    "text": "/wikipedia/lv_title/Filadelfija",
                    "lang": "",
                    "value": "/wikipedia/lv_title/Filadelfija",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:52:21.001Z"
                },
                {
                    "text": "/wikipedia/zh-cn_title/$8CBB$57CE",
                    "lang": "",
                    "value": "/wikipedia/zh-cn_title/$8CBB$57CE",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:52:26.000Z"
                },
                {
                    "text": "/wikipedia/uk_title/$0424$0456$043B$0430$0434$0435$043B$044C$0444$0456$044F",
                    "lang": "",
                    "value": "/wikipedia/uk_title/$0424$0456$043B$0430$0434$0435$043B$044C$0444$0456$044F",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:52:38.000Z"
                },
                {
                    "text": "/wikipedia/bg/$0424$0438$043B$0430$0434$0435$043B$0444$0438$0430",
                    "lang": "",
                    "value": "/wikipedia/bg/$0424$0438$043B$0430$0434$0435$043B$0444$0438$0430",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:52:39.000Z"
                },
                {
                    "text": "/wikipedia/es/Filadelfia_$0028EE$002EUU$002E$0029",
                    "lang": "",
                    "value": "/wikipedia/es/Filadelfia_$0028EE$002EUU$002E$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:52:42.000Z"
                },
                {
                    "text": "/wikipedia/ca/Philadelphia$002C_Pennsylvania",
                    "lang": "",
                    "value": "/wikipedia/ca/Philadelphia$002C_Pennsylvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:52:48.000Z"
                },
                {
                    "text": "/wikipedia/ms/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/ms/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:52:52.000Z"
                },
                {
                    "text": "/wikipedia/hr_title/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/hr_title/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:52:53.000Z"
                },
                {
                    "text": "/wikipedia/cs/Filadelfia",
                    "lang": "",
                    "value": "/wikipedia/cs/Filadelfia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:52:59.000Z"
                },
                {
                    "text": "/wikipedia/ro/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/ro/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:53:00.000Z"
                },
                {
                    "text": "/wikipedia/hi_title/$092B$093F$0932$093E$0921$0947$0932$094D$092B$093F$092F$093E",
                    "lang": "",
                    "value": "/wikipedia/hi_title/$092B$093F$0932$093E$0921$0947$0932$094D$092B$093F$092F$093E",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:53:02.000Z"
                },
                {
                    "text": "/wikipedia/sl/Filadelfija$002C_Pensilvanija",
                    "lang": "",
                    "value": "/wikipedia/sl/Filadelfija$002C_Pensilvanija",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:53:06.000Z"
                },
                {
                    "text": "/wikipedia/nl/Philadelphia$002C_Pennsylvania",
                    "lang": "",
                    "value": "/wikipedia/nl/Philadelphia$002C_Pennsylvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:53:08.000Z"
                },
                {
                    "text": "/wikipedia/zh-tw/$8CBB$57CE$5E02",
                    "lang": "",
                    "value": "/wikipedia/zh-tw/$8CBB$57CE$5E02",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:53:08.000Z"
                },
                {
                    "text": "/wikipedia/tr/Filadelfiya",
                    "lang": "",
                    "value": "/wikipedia/tr/Filadelfiya",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:53:09.000Z"
                },
                {
                    "text": "/wikipedia/vi/Phila$0111enphia",
                    "lang": "",
                    "value": "/wikipedia/vi/Phila$0111enphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:53:12.000Z"
                },
                {
                    "text": "/wikipedia/ru/$0424$0438$043B$0430$0434$0435$043B$044C$0444$0438$044F_$0028$0421$0428$0410$0029",
                    "lang": "",
                    "value": "/wikipedia/ru/$0424$0438$043B$0430$0434$0435$043B$044C$0444$0438$044F_$0028$0421$0428$0410$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:53:13.000Z"
                },
                {
                    "text": "/wikipedia/zh-cn/$8D39$57CE$5E02",
                    "lang": "",
                    "value": "/wikipedia/zh-cn/$8D39$57CE$5E02",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:53:19.001Z"
                },
                {
                    "text": "/wikipedia/ar/$0641$064A$0644$0627$062F$064A$0644$0641$064A$0627",
                    "lang": "",
                    "value": "/wikipedia/ar/$0641$064A$0644$0627$062F$064A$0644$0641$064A$0627",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:53:23.000Z"
                },
                {
                    "text": "/wikipedia/id/Philadelphia$002C_Pennsylvania",
                    "lang": "",
                    "value": "/wikipedia/id/Philadelphia$002C_Pennsylvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:53:35.000Z"
                },
                {
                    "text": "/wikipedia/cs/Philadelphie",
                    "lang": "",
                    "value": "/wikipedia/cs/Philadelphie",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:53:41.000Z"
                },
                {
                    "text": "/wikipedia/fi/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/fi/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:53:43.000Z"
                },
                {
                    "text": "/wikipedia/ko_title/$D544$B77C$B378$D53C$C544",
                    "lang": "",
                    "value": "/wikipedia/ko_title/$D544$B77C$B378$D53C$C544",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:53:43.000Z"
                },
                {
                    "text": "/wikipedia/tr/Philadelphia$002C_Pensilvanya",
                    "lang": "",
                    "value": "/wikipedia/tr/Philadelphia$002C_Pensilvanya",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:53:48.000Z"
                },
                {
                    "text": "/wikipedia/sv_id/19254",
                    "lang": "",
                    "value": "/wikipedia/sv_id/19254",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:53:52.000Z"
                },
                {
                    "text": "/wikipedia/de/Philadelphia$002C_Pennsylvania",
                    "lang": "",
                    "value": "/wikipedia/de/Philadelphia$002C_Pennsylvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:53:56.000Z"
                },
                {
                    "text": "/wikipedia/lv_id/31722",
                    "lang": "",
                    "value": "/wikipedia/lv_id/31722",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:54:01.000Z"
                },
                {
                    "text": "/wikipedia/sk/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/sk/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:54:06.000Z"
                },
                {
                    "text": "/wikipedia/sr_title/$0424$0438$043B$0430$0434$0435$043B$0444$0438$0458$0430",
                    "lang": "",
                    "value": "/wikipedia/sr_title/$0424$0438$043B$0430$0434$0435$043B$0444$0438$0458$0430",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:54:16.000Z"
                },
                {
                    "text": "/wikipedia/es/Area_de_Filadelfia",
                    "lang": "",
                    "value": "/wikipedia/es/Area_de_Filadelfia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:54:16.000Z"
                },
                {
                    "text": "/wikipedia/lt_id/29030",
                    "lang": "",
                    "value": "/wikipedia/lt_id/29030",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:54:18.000Z"
                },
                {
                    "text": "/wikipedia/ar/$0641$064A$0644$0627$062F$064A$0644$0641$064A$0627$060C_$0628$064A$0646$0633$0644$0641$0627$0646$064A$0627",
                    "lang": "",
                    "value": "/wikipedia/ar/$0641$064A$0644$0627$062F$064A$0644$0641$064A$0627$060C_$0628$064A$0646$0633$0644$0641$0627$0646$064A$0627",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:54:18.000Z"
                },
                {
                    "text": "/wikipedia/zh-tw_id/214014",
                    "lang": "",
                    "value": "/wikipedia/zh-tw_id/214014",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:54:24.000Z"
                },
                {
                    "text": "/wikipedia/lt/Filadelfija",
                    "lang": "",
                    "value": "/wikipedia/lt/Filadelfija",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:54:31.000Z"
                },
                {
                    "text": "/wikipedia/da_id/41540",
                    "lang": "",
                    "value": "/wikipedia/da_id/41540",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:54:31.000Z"
                },
                {
                    "text": "/wikipedia/id_title/Philadelphia$002C_Pennsylvania",
                    "lang": "",
                    "value": "/wikipedia/id_title/Philadelphia$002C_Pennsylvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:54:42.000Z"
                },
                {
                    "text": "/wikipedia/lt/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/lt/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:54:42.000Z"
                },
                {
                    "text": "/wikipedia/zh-tw/$8CBB$57CE$5730$5340",
                    "lang": "",
                    "value": "/wikipedia/zh-tw/$8CBB$57CE$5730$5340",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:54:44.000Z"
                },
                {
                    "text": "/wikipedia/pt/Filad$00E9lfia_$0028Estados_Unidos$0029",
                    "lang": "",
                    "value": "/wikipedia/pt/Filad$00E9lfia_$0028Estados_Unidos$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:54:52.000Z"
                },
                {
                    "text": "/wikipedia/cs_id/152919",
                    "lang": "",
                    "value": "/wikipedia/cs_id/152919",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:54:55.000Z"
                },
                {
                    "text": "/wikipedia/ko/$D544$B77C$B378$D53C$C544_$C2DC",
                    "lang": "",
                    "value": "/wikipedia/ko/$D544$B77C$B378$D53C$C544_$C2DC",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:55:01.000Z"
                },
                {
                    "text": "/wikipedia/pt/Filad$00E9lfia_$0028Pensilv$00E2nia$0029",
                    "lang": "",
                    "value": "/wikipedia/pt/Filad$00E9lfia_$0028Pensilv$00E2nia$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:55:02.000Z"
                },
                {
                    "text": "/wikipedia/zh-cn/$8CBB$57CE$5730$5340",
                    "lang": "",
                    "value": "/wikipedia/zh-cn/$8CBB$57CE$5730$5340",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:55:06.000Z"
                },
                {
                    "text": "/wikipedia/uk/$0424$0456$043B$0430$0434$0435$043B$044C$0444$0456$044F",
                    "lang": "",
                    "value": "/wikipedia/uk/$0424$0456$043B$0430$0434$0435$043B$044C$0444$0456$044F",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:55:07.000Z"
                },
                {
                    "text": "/wikipedia/es/Filadelfia_$0028Pensilvania$0029",
                    "lang": "",
                    "value": "/wikipedia/es/Filadelfia_$0028Pensilvania$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:55:10.000Z"
                },
                {
                    "text": "/wikipedia/zh-tw/$8D39$57CE$5E02",
                    "lang": "",
                    "value": "/wikipedia/zh-tw/$8D39$57CE$5E02",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:55:10.000Z"
                },
                {
                    "text": "/wikipedia/fa_title/$0641$06CC$0644$0627$062F$0644$0641$06CC$0627",
                    "lang": "",
                    "value": "/wikipedia/fa_title/$0641$06CC$0644$0627$062F$0644$0641$06CC$0627",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:55:13.000Z"
                },
                {
                    "text": "/wikipedia/sk_id/3867",
                    "lang": "",
                    "value": "/wikipedia/sk_id/3867",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:55:21.000Z"
                },
                {
                    "text": "/wikipedia/hr_id/49414",
                    "lang": "",
                    "value": "/wikipedia/hr_id/49414",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:55:23.000Z"
                },
                {
                    "text": "/wikipedia/da/Philadelphia$002C_Pennsylvania",
                    "lang": "",
                    "value": "/wikipedia/da/Philadelphia$002C_Pennsylvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:55:23.000Z"
                },
                {
                    "text": "/wikipedia/sl/Philadelphia$002C_Pensilvanija",
                    "lang": "",
                    "value": "/wikipedia/sl/Philadelphia$002C_Pensilvanija",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:55:25.000Z"
                },
                {
                    "text": "/wikipedia/vi_title/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/vi_title/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:55:39.000Z"
                },
                {
                    "text": "/wikipedia/no/Philadelphia$002C_Pennsylvania",
                    "lang": "",
                    "value": "/wikipedia/no/Philadelphia$002C_Pennsylvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:55:45.000Z"
                },
                {
                    "text": "/wikipedia/es/Filadelfia_$0028Estados_Unidos$0029",
                    "lang": "",
                    "value": "/wikipedia/es/Filadelfia_$0028Estados_Unidos$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:55:45.000Z"
                },
                {
                    "text": "/wikipedia/ar/$0641$064A$0644$0627$062F$0644$0641$064A$0627$060C_$0628$0646$0633$064A$0644$0641$0627$0646$064A$0627",
                    "lang": "",
                    "value": "/wikipedia/ar/$0641$064A$0644$0627$062F$0644$0641$064A$0627$060C_$0628$0646$0633$064A$0644$0641$0627$0646$064A$0627",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:55:49.000Z"
                },
                {
                    "text": "/wikipedia/vi/Philadelphia$002C_PA",
                    "lang": "",
                    "value": "/wikipedia/vi/Philadelphia$002C_PA",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:55:50.000Z"
                },
                {
                    "text": "/wikipedia/ko/$D544$B77C$B378$D53C$C544",
                    "lang": "",
                    "value": "/wikipedia/ko/$D544$B77C$B378$D53C$C544",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:55:54.000Z"
                },
                {
                    "text": "/wikipedia/vi_id/60192",
                    "lang": "",
                    "value": "/wikipedia/vi_id/60192",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:55:54.000Z"
                },
                {
                    "text": "/wikipedia/ro/Philadelphia$002C_Pennsylvania",
                    "lang": "",
                    "value": "/wikipedia/ro/Philadelphia$002C_Pennsylvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:56:04.000Z"
                },
                {
                    "text": "/wikipedia/zh-cn_id/214014",
                    "lang": "",
                    "value": "/wikipedia/zh-cn_id/214014",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:56:05.000Z"
                },
                {
                    "text": "/wikipedia/el/$03A6$03B9$03BB$03B1$03B4$03AD$03BB$03C6$03B5$03B9$03B1_$0028$0397$03A0$0391$0029",
                    "lang": "",
                    "value": "/wikipedia/el/$03A6$03B9$03BB$03B1$03B4$03AD$03BB$03C6$03B5$03B9$03B1_$0028$0397$03A0$0391$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:56:06.000Z"
                },
                {
                    "text": "/wikipedia/tr/Filedelfiya",
                    "lang": "",
                    "value": "/wikipedia/tr/Filedelfiya",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:56:13.000Z"
                },
                {
                    "text": "/wikipedia/el_title/$03A6$03B9$03BB$03B1$03B4$03AD$03BB$03C6$03B5$03B9$03B1_$0028$0397$03A0$0391$0029",
                    "lang": "",
                    "value": "/wikipedia/el_title/$03A6$03B9$03BB$03B1$03B4$03AD$03BB$03C6$03B5$03B9$03B1_$0028$0397$03A0$0391$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:56:19.000Z"
                },
                {
                    "text": "/wikipedia/zh-tw/$8D39$57CE",
                    "lang": "",
                    "value": "/wikipedia/zh-tw/$8D39$57CE",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:56:22.000Z"
                },
                {
                    "text": "/wikipedia/zh-cn/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/zh-cn/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:56:27.000Z"
                },
                {
                    "text": "/wikipedia/es/Philadelphia_Pennsylvania",
                    "lang": "",
                    "value": "/wikipedia/es/Philadelphia_Pennsylvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:56:33.000Z"
                },
                {
                    "text": "/wikipedia/el_id/50091",
                    "lang": "",
                    "value": "/wikipedia/el_id/50091",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:56:39.000Z"
                },
                {
                    "text": "/wikipedia/de/Philadelphia_$0028Pennsylvania$0029",
                    "lang": "",
                    "value": "/wikipedia/de/Philadelphia_$0028Pennsylvania$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:56:41.000Z"
                },
                {
                    "text": "/wikipedia/es/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/es/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:56:43.000Z"
                },
                {
                    "text": "/wikipedia/ru/$0424$0438$043B$0430$0434$0435$043B$044C$0444$0438$044F_$0028$0433$043E$0440$043E$0434_$0432_$0421$0428$0410$0029",
                    "lang": "",
                    "value": "/wikipedia/ru/$0424$0438$043B$0430$0434$0435$043B$044C$0444$0438$044F_$0028$0433$043E$0440$043E$0434_$0432_$0421$0428$0410$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:56:46.000Z"
                },
                {
                    "text": "/wikipedia/ca/Filad$00E8lfia_$0028Pennsilv$00E0nia$0029",
                    "lang": "",
                    "value": "/wikipedia/ca/Filad$00E8lfia_$0028Pennsilv$00E0nia$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:56:51.000Z"
                },
                {
                    "text": "/wikipedia/sv/Philadelphia$002C_Pennsylvania",
                    "lang": "",
                    "value": "/wikipedia/sv/Philadelphia$002C_Pennsylvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:56:56.000Z"
                },
                {
                    "text": "/wikipedia/he_id/26222",
                    "lang": "",
                    "value": "/wikipedia/he_id/26222",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:57:03.000Z"
                },
                {
                    "text": "/wikipedia/lv/Filadelfija",
                    "lang": "",
                    "value": "/wikipedia/lv/Filadelfija",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:57:06.000Z"
                },
                {
                    "text": "/wikipedia/nl/Philadelphia_$0028Pennsylvania$0029",
                    "lang": "",
                    "value": "/wikipedia/nl/Philadelphia_$0028Pennsylvania$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:57:11.000Z"
                },
                {
                    "text": "/wikipedia/fr/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/fr/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:57:11.000Z"
                },
                {
                    "text": "/wikipedia/pt/Condado_de_Filad$00E9lfia",
                    "lang": "",
                    "value": "/wikipedia/pt/Condado_de_Filad$00E9lfia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:57:17.000Z"
                },
                {
                    "text": "/wikipedia/fa/$0641$064A$0644$0627$062F$0644$0641$064A$0627",
                    "lang": "",
                    "value": "/wikipedia/fa/$0641$064A$0644$0627$062F$0644$0641$064A$0627",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:57:18.000Z"
                },
                {
                    "text": "/wikipedia/vi/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/vi/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:57:18.000Z"
                },
                {
                    "text": "/wikipedia/ro_title/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/ro_title/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:57:37.000Z"
                },
                {
                    "text": "/wikipedia/ru/$0424$0438$043B$0430$0434$0435$043B$044C$0444$0438$044F_$0028$041F$0435$043D$0441$0438$043B$044C$0432$0430$043D$0438$044F$0029",
                    "lang": "",
                    "value": "/wikipedia/ru/$0424$0438$043B$0430$0434$0435$043B$044C$0444$0438$044F_$0028$041F$0435$043D$0441$0438$043B$044C$0432$0430$043D$0438$044F$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:57:38.000Z"
                },
                {
                    "text": "/wikipedia/vi/Philly",
                    "lang": "",
                    "value": "/wikipedia/vi/Philly",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:57:42.000Z"
                },
                {
                    "text": "/wikipedia/es/Filadelfia$002C_Pensilvania",
                    "lang": "",
                    "value": "/wikipedia/es/Filadelfia$002C_Pensilvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:57:46.000Z"
                },
                {
                    "text": "/wikipedia/tr/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/tr/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:57:53.000Z"
                },
                {
                    "text": "/wikipedia/it/Philadelphia_$0028Pennsylvania$0029",
                    "lang": "",
                    "value": "/wikipedia/it/Philadelphia_$0028Pennsylvania$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:57:54.000Z"
                },
                {
                    "text": "/wikipedia/fr/Logan_$0028Philadelphie$0029",
                    "lang": "",
                    "value": "/wikipedia/fr/Logan_$0028Philadelphie$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:57:54.000Z"
                },
                {
                    "text": "/wikipedia/cs/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/cs/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:57:56.000Z"
                },
                {
                    "text": "/wikipedia/no/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/no/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:57:57.000Z"
                },
                {
                    "text": "/wikipedia/sr/$0424$0438$043B$0430$0434$0435$043B$0444$0438$0458$0430_$0028$0421$0410$0414$0029",
                    "lang": "",
                    "value": "/wikipedia/sr/$0424$0438$043B$0430$0434$0435$043B$0444$0438$0458$0430_$0028$0421$0410$0414$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:58:00.000Z"
                },
                {
                    "text": "/wikipedia/sl_id/78495",
                    "lang": "",
                    "value": "/wikipedia/sl_id/78495",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:58:02.000Z"
                },
                {
                    "text": "/wikipedia/hr/Philadelphia$002C_Pennsylvania",
                    "lang": "",
                    "value": "/wikipedia/hr/Philadelphia$002C_Pennsylvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:58:04.001Z"
                },
                {
                    "text": "/wikipedia/pl_id/64399",
                    "lang": "",
                    "value": "/wikipedia/pl_id/64399",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:58:04.001Z"
                },
                {
                    "text": "/wikipedia/hu_title/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/hu_title/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:58:05.000Z"
                },
                {
                    "text": "/wikipedia/ar_id/58862",
                    "lang": "",
                    "value": "/wikipedia/ar_id/58862",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:58:07.000Z"
                },
                {
                    "text": "/wikipedia/zh-tw/$8D39$57CE_$0028$5BBE$5915$6CD5$5C3C$4E9A$5DDE$0029",
                    "lang": "",
                    "value": "/wikipedia/zh-tw/$8D39$57CE_$0028$5BBE$5915$6CD5$5C3C$4E9A$5DDE$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:58:09.000Z"
                },
                {
                    "text": "/wikipedia/hr/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/hr/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:58:09.000Z"
                },
                {
                    "text": "/wikipedia/ar/$0641$064A$0644$0627$062F$0644$0641$064A$0627",
                    "lang": "",
                    "value": "/wikipedia/ar/$0641$064A$0644$0627$062F$0644$0641$064A$0627",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:58:16.000Z"
                },
                {
                    "text": "/wikipedia/cs/Filadelfie",
                    "lang": "",
                    "value": "/wikipedia/cs/Filadelfie",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:58:23.000Z"
                },
                {
                    "text": "/wikipedia/zh-cn/$8D39$57CE_$0028$5BBE$5915$6CD5$5C3C$4E9A$5DDE$0029",
                    "lang": "",
                    "value": "/wikipedia/zh-cn/$8D39$57CE_$0028$5BBE$5915$6CD5$5C3C$4E9A$5DDE$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:58:24.000Z"
                },
                {
                    "text": "/wikipedia/nl_id/41851",
                    "lang": "",
                    "value": "/wikipedia/nl_id/41851",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:58:24.001Z"
                },
                {
                    "text": "/wikipedia/ru/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/ru/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:58:28.000Z"
                },
                {
                    "text": "/wikipedia/lv/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/lv/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:58:31.000Z"
                },
                {
                    "text": "/wikipedia/no_title/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/no_title/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:58:36.000Z"
                },
                {
                    "text": "/wikipedia/fr/Philadelphie_$0028Pennsylvanie$0029",
                    "lang": "",
                    "value": "/wikipedia/fr/Philadelphie_$0028Pennsylvanie$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:58:38.000Z"
                },
                {
                    "text": "/wikipedia/sr/$0424$0438$043B$0430$0434$0435$043B$0444$0438$0458$0430$002C_$041F$0435$043D$0441$0438$043B$0432$0430$043D$0438$0458$0430",
                    "lang": "",
                    "value": "/wikipedia/sr/$0424$0438$043B$0430$0434$0435$043B$0444$0438$0458$0430$002C_$041F$0435$043D$0441$0438$043B$0432$0430$043D$0438$0458$0430",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:58:38.000Z"
                },
                {
                    "text": "/wikipedia/ms_title/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/ms_title/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:58:40.000Z"
                },
                {
                    "text": "/wikipedia/tr/Filadelfiya$002C_Pensilvanya",
                    "lang": "",
                    "value": "/wikipedia/tr/Filadelfiya$002C_Pensilvanya",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:58:46.000Z"
                },
                {
                    "text": "/wikipedia/ja/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/ja/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:58:50.000Z"
                },
                {
                    "text": "/wikipedia/he_title/$05E4$05D9$05DC$05D3$05DC$05E4$05D9$05D4",
                    "lang": "",
                    "value": "/wikipedia/he_title/$05E4$05D9$05DC$05D3$05DC$05E4$05D9$05D4",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:58:56.000Z"
                },
                {
                    "text": "/wikipedia/da_title/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/da_title/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:58:59.000Z"
                },
                {
                    "text": "/wikipedia/da/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/da/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:59:02.000Z"
                },
                {
                    "text": "/wikipedia/sr/$0424$0438$043B$0430$0434$0435$043B$0444$0438$0458$0430",
                    "lang": "",
                    "value": "/wikipedia/sr/$0424$0438$043B$0430$0434$0435$043B$0444$0438$0458$0430",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:59:04.000Z"
                },
                {
                    "text": "/wikipedia/id_id/36302",
                    "lang": "",
                    "value": "/wikipedia/id_id/36302",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:59:07.000Z"
                },
                {
                    "text": "/wikipedia/tr/Filedelfiya$002C_Pensilvanya",
                    "lang": "",
                    "value": "/wikipedia/tr/Filedelfiya$002C_Pensilvanya",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:59:18.000Z"
                },
                {
                    "text": "/wikipedia/zh-tw/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/zh-tw/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:59:31.000Z"
                },
                {
                    "text": "/wikipedia/id/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/id/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:59:40.000Z"
                },
                {
                    "text": "/wikipedia/ms_id/195920",
                    "lang": "",
                    "value": "/wikipedia/ms_id/195920",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:59:42.000Z"
                },
                {
                    "text": "/wikipedia/es/Philadelphia$002C_PA",
                    "lang": "",
                    "value": "/wikipedia/es/Philadelphia$002C_PA",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:59:42.000Z"
                },
                {
                    "text": "/wikipedia/tr/Philadelphia$002C_Pennsylvania",
                    "lang": "",
                    "value": "/wikipedia/tr/Philadelphia$002C_Pennsylvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:59:51.000Z"
                },
                {
                    "text": "/wikipedia/de/Philadelphia_County",
                    "lang": "",
                    "value": "/wikipedia/de/Philadelphia_County",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T21:59:59.000Z"
                },
                {
                    "text": "/wikipedia/el/$03A6$03B9$03BB$03B1$03B4$03AD$03BB$03C6$03B5$03B9$03B1_$0028$0397$002E$03A0$002E$0391$002E$0029",
                    "lang": "",
                    "value": "/wikipedia/el/$03A6$03B9$03BB$03B1$03B4$03AD$03BB$03C6$03B5$03B9$03B1_$0028$0397$002E$03A0$002E$0391$002E$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:00:01.000Z"
                },
                {
                    "text": "/wikipedia/es/Philadelphia_$0028Pensilvania$0029",
                    "lang": "",
                    "value": "/wikipedia/es/Philadelphia_$0028Pensilvania$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:00:11.000Z"
                },
                {
                    "text": "/wikipedia/ar_title/$0641$064A$0644$0627$062F$0644$0641$064A$0627$060C_$0628$0646$0633$064A$0644$0641$0627$0646$064A$0627",
                    "lang": "",
                    "value": "/wikipedia/ar_title/$0641$064A$0644$0627$062F$0644$0641$064A$0627$060C_$0628$0646$0633$064A$0644$0641$0627$0646$064A$0627",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:00:14.000Z"
                },
                {
                    "text": "/wikipedia/uk_id/18734",
                    "lang": "",
                    "value": "/wikipedia/uk_id/18734",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:00:16.000Z"
                },
                {
                    "text": "/wikipedia/sl/Filadelfija",
                    "lang": "",
                    "value": "/wikipedia/sl/Filadelfija",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:00:22.000Z"
                },
                {
                    "text": "/wikipedia/zh-tw_title/$8CBB$57CE",
                    "lang": "",
                    "value": "/wikipedia/zh-tw_title/$8CBB$57CE",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:00:24.000Z"
                },
                {
                    "text": "/wikipedia/ro_id/89471",
                    "lang": "",
                    "value": "/wikipedia/ro_id/89471",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:00:39.000Z"
                },
                {
                    "text": "/wikipedia/hu_id/118612",
                    "lang": "",
                    "value": "/wikipedia/hu_id/118612",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:00:40.000Z"
                },
                {
                    "text": "/wikipedia/it/Philadelphia$002C_Pennsylvania",
                    "lang": "",
                    "value": "/wikipedia/it/Philadelphia$002C_Pennsylvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:00:41.000Z"
                },
                {
                    "text": "/wikipedia/zh-tw/$8CBB$57CE",
                    "lang": "",
                    "value": "/wikipedia/zh-tw/$8CBB$57CE",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:00:48.000Z"
                },
                {
                    "text": "/wikipedia/cs_title/Filadelfie",
                    "lang": "",
                    "value": "/wikipedia/cs_title/Filadelfie",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:00:49.000Z"
                },
                {
                    "text": "/wikipedia/zh-cn/$8CBB$57CE",
                    "lang": "",
                    "value": "/wikipedia/zh-cn/$8CBB$57CE",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:00:51.000Z"
                },
                {
                    "text": "/wikipedia/hi_id/162822",
                    "lang": "",
                    "value": "/wikipedia/hi_id/162822",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:00:54.000Z"
                },
                {
                    "text": "/wikipedia/it/Philadephia$002C_Pennsylvania",
                    "lang": "",
                    "value": "/wikipedia/it/Philadephia$002C_Pennsylvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:01:01.000Z"
                },
                {
                    "text": "/wikipedia/sl/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/sl/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:01:02.000Z"
                },
                {
                    "text": "/wikipedia/lt_title/Filadelfija",
                    "lang": "",
                    "value": "/wikipedia/lt_title/Filadelfija",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:01:07.000Z"
                },
                {
                    "text": "/wikipedia/ko_id/66522",
                    "lang": "",
                    "value": "/wikipedia/ko_id/66522",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:01:08.000Z"
                },
                {
                    "text": "/wikipedia/es/$00C1rea_de_Filadelfia",
                    "lang": "",
                    "value": "/wikipedia/es/$00C1rea_de_Filadelfia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:01:10.000Z"
                },
                {
                    "text": "/wikipedia/id/Philadelphia_$0028Pennsylvania$0029",
                    "lang": "",
                    "value": "/wikipedia/id/Philadelphia_$0028Pennsylvania$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:01:17.000Z"
                },
                {
                    "text": "/wikipedia/fi_id/29368",
                    "lang": "",
                    "value": "/wikipedia/fi_id/29368",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:01:18.000Z"
                },
                {
                    "text": "/wikipedia/uk/$0424$0456$043B$0430$0434$0435$043B$044C$0444$0456$044F_$0028$0421$0428$0410$0029",
                    "lang": "",
                    "value": "/wikipedia/uk/$0424$0456$043B$0430$0434$0435$043B$044C$0444$0456$044F_$0028$0421$0428$0410$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:01:19.000Z"
                },
                {
                    "text": "/wikipedia/ca_id/81298",
                    "lang": "",
                    "value": "/wikipedia/ca_id/81298",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:01:23.000Z"
                },
                {
                    "text": "/wikipedia/id/Philladelphia",
                    "lang": "",
                    "value": "/wikipedia/id/Philladelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:01:27.000Z"
                },
                {
                    "text": "/wikipedia/no_id/53089",
                    "lang": "",
                    "value": "/wikipedia/no_id/53089",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:01:29.000Z"
                },
                {
                    "text": "/wikipedia/sk_title/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/sk_title/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:01:37.000Z"
                },
                {
                    "text": "/wikipedia/sv/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/sv/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:01:43.000Z"
                },
                {
                    "text": "/wikipedia/fa_id/113977",
                    "lang": "",
                    "value": "/wikipedia/fa_id/113977",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:01:45.000Z"
                },
                {
                    "text": "/wikipedia/th_title/$0E1F$0E34$0E25$0E32$0E40$0E14$0E25$0E40$0E1F$0E35$0E22",
                    "lang": "",
                    "value": "/wikipedia/th_title/$0E1F$0E34$0E25$0E32$0E40$0E14$0E25$0E40$0E1F$0E35$0E22",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:01:54.000Z"
                },
                {
                    "text": "/wikipedia/hi/$092B$093F$0932$093E$0921$0947$0932$094D$092B$093F$092F$093E",
                    "lang": "",
                    "value": "/wikipedia/hi/$092B$093F$0932$093E$0921$0947$0932$094D$092B$093F$092F$093E",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:01:59.000Z"
                },
                {
                    "text": "/wikipedia/sr_id/97743",
                    "lang": "",
                    "value": "/wikipedia/sr_id/97743",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:02:03.000Z"
                },
                {
                    "text": "/wikipedia/hu/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/hu/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:02:10.000Z"
                },
                {
                    "text": "/wikipedia/fa/$0641$06CC$0644$0627$062F$0644$0641$06CC$0627",
                    "lang": "",
                    "value": "/wikipedia/fa/$0641$06CC$0644$0627$062F$0644$0641$06CC$0627",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:02:10.000Z"
                },
                {
                    "text": "/wikipedia/th/$0E1F$0E34$0E25$0E32$0E40$0E14$0E40$0E1F$0E35$0E22",
                    "lang": "",
                    "value": "/wikipedia/th/$0E1F$0E34$0E25$0E32$0E40$0E14$0E40$0E1F$0E35$0E22",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:02:20.000Z"
                },
                {
                    "text": "/wikipedia/nl_title/Philadelphia_$0028Pennsylvania$0029",
                    "lang": "",
                    "value": "/wikipedia/nl_title/Philadelphia_$0028Pennsylvania$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:02:28.000Z"
                },
                {
                    "text": "/wikipedia/he/$05E4$05D9$05DC$05D3$05DC$05E4$05D9$05D4",
                    "lang": "",
                    "value": "/wikipedia/he/$05E4$05D9$05DC$05D3$05DC$05E4$05D9$05D4",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:02:29.000Z"
                },
                {
                    "text": "/wikipedia/tr_title/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/tr_title/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:02:47.000Z"
                },
                {
                    "text": "/wikipedia/th/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/th/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:02:51.000Z"
                },
                {
                    "text": "/wikipedia/de/Philly",
                    "lang": "",
                    "value": "/wikipedia/de/Philly",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:03:02.000Z"
                },
                {
                    "text": "/wikipedia/pl_title/Filadelfia",
                    "lang": "",
                    "value": "/wikipedia/pl_title/Filadelfia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:03:44.000Z"
                },
                {
                    "text": "/wikipedia/sl_title/Filadelfija$002C_Pensilvanija",
                    "lang": "",
                    "value": "/wikipedia/sl_title/Filadelfija$002C_Pensilvanija",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:03:46.000Z"
                },
                {
                    "text": "/wikipedia/th/$0E1F$0E34$0E25$0E32$0E40$0E14$0E25$0E40$0E1F$0E35$0E22",
                    "lang": "",
                    "value": "/wikipedia/th/$0E1F$0E34$0E25$0E32$0E40$0E14$0E25$0E40$0E1F$0E35$0E22",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:03:51.000Z"
                },
                {
                    "text": "/wikipedia/sv_title/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/sv_title/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:04:15.000Z"
                },
                {
                    "text": "/wikipedia/pl/Filadelfia",
                    "lang": "",
                    "value": "/wikipedia/pl/Filadelfia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2012-11-27T22:04:41.000Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia_$0028Pennsylvania$0029",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia_$0028Pennsylvania$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:12:17.000Z"
                },
                {
                    "text": "/wikipedia/en/The_Birthplace_of_America",
                    "lang": "",
                    "value": "/wikipedia/en/The_Birthplace_of_America",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:12:19.001Z"
                },
                {
                    "text": "/wikipedia/en/Filthydelphia",
                    "lang": "",
                    "value": "/wikipedia/en/Filthydelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:12:21.001Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia$002C_Pennsylvania$002C_U$002ES$002EA$002E",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia$002C_Pennsylvania$002C_U$002ES$002EA$002E",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:12:25.000Z"
                },
                {
                    "text": "/wikipedia/en/City_of_Brotherly_Love",
                    "lang": "",
                    "value": "/wikipedia/en/City_of_Brotherly_Love",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:12:27.001Z"
                },
                {
                    "text": "/wikipedia/en/The_City_of_Brotherly_Love",
                    "lang": "",
                    "value": "/wikipedia/en/The_City_of_Brotherly_Love",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:12:30.000Z"
                },
                {
                    "text": "/wikipedia/en/Philidelphia",
                    "lang": "",
                    "value": "/wikipedia/en/Philidelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:12:31.002Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia_Register_of_Historic_Places",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia_Register_of_Historic_Places",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:12:33.001Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia$002C_U$002ES$002E",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia$002C_U$002ES$002E",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:12:35.001Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia_Regional_Rail",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia_Regional_Rail",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:12:37.000Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia$002C_USA",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia$002C_USA",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:12:39.000Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia_City",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia_City",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:12:41.000Z"
                },
                {
                    "text": "/wikipedia/en/The_city_of_brotherly_love",
                    "lang": "",
                    "value": "/wikipedia/en/The_city_of_brotherly_love",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:12:42.001Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia$002C_Pa",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia$002C_Pa",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:12:44.001Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia_$0028City$0029",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia_$0028City$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:12:46.001Z"
                },
                {
                    "text": "/wikipedia/en/Wiccacoa",
                    "lang": "",
                    "value": "/wikipedia/en/Wiccacoa",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:12:48.000Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia_Suburban_Rail",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia_Suburban_Rail",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:12:50.000Z"
                },
                {
                    "text": "/wikipedia/en/Philidalphia",
                    "lang": "",
                    "value": "/wikipedia/en/Philidalphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:12:52.000Z"
                },
                {
                    "text": "/wikipedia/en/UN$002FLOCODE$003AUSPHL",
                    "lang": "",
                    "value": "/wikipedia/en/UN$002FLOCODE$003AUSPHL",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:12:53.002Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia$002C_Pennsylvania$002C_U$002ES$002E",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia$002C_Pennsylvania$002C_U$002ES$002E",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:12:55.001Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia_Commuter_Rail",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia_Commuter_Rail",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:12:57.000Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia$002C_Pa$002E",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia$002C_Pa$002E",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:12:58.002Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia_$0028Pa$002E$0029",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia_$0028Pa$002E$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:00.001Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphi",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphi",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:06.000Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia_$0028city$002C_Pennsylvania$0029",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia_$0028city$002C_Pennsylvania$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:08.000Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia_Historical_Commission",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia_Historical_Commission",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:09.001Z"
                },
                {
                    "text": "/wikipedia/en/Philladelphia",
                    "lang": "",
                    "value": "/wikipedia/en/Philladelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:11.001Z"
                },
                {
                    "text": "/wikipedia/en/Phila$002E",
                    "lang": "",
                    "value": "/wikipedia/en/Phila$002E",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:13.000Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia$002C_United_States",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia$002C_United_States",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:19.000Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia$002C_Pennsylvania",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia$002C_Pennsylvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:21.000Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:23.001Z"
                },
                {
                    "text": "/wikipedia/en/The_Cradle_of_Liberty",
                    "lang": "",
                    "value": "/wikipedia/en/The_Cradle_of_Liberty",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:25.002Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia$002C_PA",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia$002C_PA",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:27.002Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia_City_Controller",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia_City_Controller",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:29.002Z"
                },
                {
                    "text": "/wikipedia/en/City_of_brotherly_love",
                    "lang": "",
                    "value": "/wikipedia/en/City_of_brotherly_love",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:31.000Z"
                },
                {
                    "text": "/wikipedia/en/City_of_Philadelphia",
                    "lang": "",
                    "value": "/wikipedia/en/City_of_Philadelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:33.001Z"
                },
                {
                    "text": "/wikipedia/en/Philadephia$002C_Pennsylvania",
                    "lang": "",
                    "value": "/wikipedia/en/Philadephia$002C_Pennsylvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:35.000Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia$002C_Pennsylvania$002C_US",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia$002C_Pennsylvania$002C_US",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:36.001Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia$002C_Pennsylvania$002C_USA",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia$002C_Pennsylvania$002C_USA",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:38.000Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia_$0028PA$0029",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia_$0028PA$0029",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:40.000Z"
                },
                {
                    "text": "/wikipedia/en/Philedelphia",
                    "lang": "",
                    "value": "/wikipedia/en/Philedelphia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:41.002Z"
                },
                {
                    "text": "/wikipedia/en/The_Quaker_City",
                    "lang": "",
                    "value": "/wikipedia/en/The_Quaker_City",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:44.000Z"
                },
                {
                    "text": "/wikipedia/en/The_City_That_Loves_You_Back",
                    "lang": "",
                    "value": "/wikipedia/en/The_City_That_Loves_You_Back",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:49.001Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia_Pennsylvania",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia_Pennsylvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:51.001Z"
                },
                {
                    "text": "/wikipedia/en/Philadelpia$002C_Pennsylvania",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelpia$002C_Pennsylvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:53.001Z"
                },
                {
                    "text": "/wikipedia/en/Philadelpia$002C_PA",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelpia$002C_PA",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:55.001Z"
                },
                {
                    "text": "/wikipedia/en/Philadelphia_PA",
                    "lang": "",
                    "value": "/wikipedia/en/Philadelphia_PA",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-01T17:13:57.000Z"
                },
                {
                    "text": "/wikipedia/sr/Philadelphia$002C_Pensilvania",
                    "lang": "",
                    "value": "/wikipedia/sr/Philadelphia$002C_Pensilvania",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-16T00:29:37.005Z"
                },
                {
                    "text": "/wikipedia/ca/Philadelfia",
                    "lang": "",
                    "value": "/wikipedia/ca/Philadelfia",
                    "creator": "/user/wikirecon_bot",
                    "timestamp": "2013-02-16T00:30:14.008Z"
                },
                {
                    "text": "/base/dspl/us_census/population/place/4260000",
                    "lang": "",
                    "value": "/base/dspl/us_census/population/place/4260000",
                    "creator": "/user/dspl_bot"
                }
            ],
            "count": 266
        },
        "/type/object/mid": {
            "valuetype": "key",
            "values": [
                {
                    "text": "/m/0dclg",
                    "lang": "",
                    "value": "/m/0dclg"
                }
            ],
            "count": 1
        },
        "/type/object/name": {
            "valuetype": "string",
            "values": [
                {
                    "text": "Philadelphia",
                    "lang": "en",
                    "value": "Philadelphia",
                    "creator": "/user/gardening_bot",
                    "timestamp": "2008-04-04T16:42:01.002Z"
                }
            ],
            "count": 40
        },
        "/type/object/type": {
            "valuetype": "object",
            "values": [
                {
                    "text": "Topic",
                    "lang": "en",
                    "id": "/common/topic",
                    "creator": "/user/metaweb",
                    "timestamp": "2006-10-22T09:54:11.007Z"
                },
                {
                    "text": "City/Town/Village",
                    "lang": "en",
                    "id": "/location/citytown",
                    "creator": "/user/mwcl_infobox",
                    "timestamp": "2006-12-01T19:00:01.003Z"
                },
                {
                    "text": "Location",
                    "lang": "en",
                    "id": "/location/location",
                    "creator": "/user/mwcl_infobox",
                    "timestamp": "2006-12-01T19:00:01.003Z"
                },
                {
                    "text": "Transit Service Area",
                    "lang": "en",
                    "id": "/user/joehughes/default_domain/transit_service_area",
                    "creator": "/user/joehughes",
                    "timestamp": "2007-03-18T06:24:31.000Z"
                },
                {
                    "text": "Filming location",
                    "lang": "en",
                    "id": "/film/film_location",
                    "creator": "/user/marykay",
                    "timestamp": "2007-07-16T14:18:41.000Z"
                },
                {
                    "text": "Top Architectural City",
                    "lang": "en",
                    "id": "/user/brendan/default_domain/top_architectural_city",
                    "creator": "/user/brendan",
                    "timestamp": "2007-07-31T00:20:25.001Z"
                },
                {
                    "text": "Statistical region",
                    "lang": "en",
                    "id": "/location/statistical_region",
                    "creator": "/user/nducray",
                    "timestamp": "2007-12-02T00:48:22.001Z"
                },
                {
                    "text": "Dated location",
                    "lang": "en",
                    "id": "/location/dated_location",
                    "creator": "/user/marivie",
                    "timestamp": "2007-12-22T03:37:56.001Z"
                },
                {
                    "text": "My Favorite Things",
                    "lang": "en",
                    "id": "/user/jon/default_domain/my_favorite_things",
                    "creator": "/user/jon",
                    "timestamp": "2008-04-09T06:04:29.000Z"
                },
                {
                    "text": "Governmental Jurisdiction",
                    "lang": "en",
                    "id": "/government/governmental_jurisdiction",
                    "creator": "/user/skud",
                    "timestamp": "2008-05-24T16:19:07.000Z"
                },
                {
                    "text": "Olympic bidding city",
                    "lang": "en",
                    "id": "/olympics/olympic_bidding_city",
                    "creator": "/user/arielb",
                    "timestamp": "2008-07-26T22:36:46.002Z"
                },
                {
                    "text": "Travel destination",
                    "lang": "en",
                    "id": "/travel/travel_destination",
                    "creator": "/user/skud",
                    "timestamp": "2008-09-09T18:31:22.000Z"
                },
                {
                    "text": "Place with neighborhoods",
                    "lang": "en",
                    "id": "/location/place_with_neighborhoods",
                    "creator": "/user/anne8",
                    "timestamp": "2008-10-01T03:51:32.000Z"
                },
                {
                    "text": "Place of interment",
                    "lang": "en",
                    "id": "/people/place_of_interment",
                    "creator": "/user/deathbot",
                    "timestamp": "2008-10-23T21:20:32.003Z"
                },
                {
                    "text": "Sports Team Location",
                    "lang": "en",
                    "id": "/sports/sports_team_location",
                    "creator": "/user/cheunger",
                    "timestamp": "2008-10-28T03:18:08.000Z"
                },
                {
                    "text": "Fictional Setting",
                    "lang": "en",
                    "id": "/fictional_universe/fictional_setting",
                    "creator": "/user/jeff",
                    "timestamp": "2008-11-25T00:59:52.000Z"
                },
                {
                    "text": "Airport operator",
                    "lang": "en",
                    "id": "/aviation/airport_operator",
                    "creator": "/user/mbaker",
                    "timestamp": "2009-03-02T16:36:32.000Z"
                },
                {
                    "text": "Topic",
                    "lang": "en",
                    "id": "/base/lewisandclark/topic",
                    "creator": "/user/nanette",
                    "timestamp": "2009-03-08T02:36:12.000Z"
                },
                {
                    "text": "Places Visited Westward by Lewis & Clark",
                    "lang": "en",
                    "id": "/base/lewisandclark/places_westward",
                    "creator": "/user/nanette",
                    "timestamp": "2009-03-08T02:36:12.000Z"
                },
                {
                    "text": "Topic",
                    "lang": "en",
                    "id": "/base/aubreymaturin/topic",
                    "creator": "/user/skud",
                    "timestamp": "2009-03-30T23:38:11.000Z"
                },
                {
                    "text": "Place",
                    "lang": "en",
                    "id": "/base/aubreymaturin/place",
                    "creator": "/user/skud",
                    "timestamp": "2009-03-30T23:38:11.000Z"
                },
                {
                    "text": "Real place",
                    "lang": "en",
                    "id": "/base/aubreymaturin/real_place",
                    "creator": "/user/skud",
                    "timestamp": "2009-03-31T01:16:29.000Z"
                },
                {
                    "text": "Geographical scope",
                    "lang": "en",
                    "id": "/base/events/geographical_scope",
                    "creator": "/user/nanette",
                    "timestamp": "2009-04-12T16:32:49.000Z"
                },
                {
                    "text": "Topic",
                    "lang": "en",
                    "id": "/base/summermovies2009/topic",
                    "creator": "/user/ansamcw",
                    "timestamp": "2009-05-08T02:55:49.017Z"
                },
                {
                    "text": "City with Dogs",
                    "lang": "en",
                    "id": "/base/petbreeds/city_with_dogs",
                    "creator": "/user/ansamcw",
                    "timestamp": "2009-06-07T00:26:49.000Z"
                },
                {
                    "text": "Topic",
                    "lang": "en",
                    "id": "/base/petbreeds/topic",
                    "creator": "/user/ansamcw",
                    "timestamp": "2009-06-07T00:26:49.000Z"
                },
                {
                    "text": "abh-city",
                    "lang": "en",
                    "id": "/user/nitromaster101/default_domain/abh_city",
                    "creator": "/user/nitromaster101",
                    "timestamp": "2009-10-09T18:05:00.000Z"
                },
                {
                    "text": "Literature Subject",
                    "lang": "en",
                    "id": "/book/book_subject",
                    "creator": "/user/mbaker",
                    "timestamp": "2009-10-20T02:39:50.000Z"
                },
                {
                    "text": "Topic",
                    "lang": "en",
                    "id": "/base/repositoriesinphila/topic",
                    "creator": "/user/scottzee",
                    "timestamp": "2009-12-18T14:27:16.001Z"
                },
                {
                    "text": "Ontology Instance",
                    "lang": "en",
                    "id": "/base/ontologies/ontology_instance",
                    "creator": "/user/spencermountain",
                    "timestamp": "2010-01-03T16:38:32.000Z"
                },
                {
                    "text": "HUD County Place",
                    "lang": "en",
                    "id": "/location/hud_county_place",
                    "creator": "/user/mw_od_bot",
                    "timestamp": "2010-01-05T17:48:03.000Z"
                },
                {
                    "text": "HUD Foreclosure Area",
                    "lang": "en",
                    "id": "/location/hud_foreclosure_area",
                    "creator": "/user/mw_od_bot",
                    "timestamp": "2010-01-05T17:48:03.001Z"
                },
                {
                    "text": "Place",
                    "lang": "en",
                    "id": "/base/tagit/place",
                    "creator": "/user/tagasauris",
                    "timestamp": "2010-07-22T07:27:10.000Z"
                },
                {
                    "text": "Newspaper circulation area",
                    "lang": "en",
                    "id": "/periodicals/newspaper_circulation_area",
                    "creator": "/user/mw_od_bot",
                    "timestamp": "2010-09-16T05:49:48.000Z"
                },
                {
                    "text": "Organization scope",
                    "lang": "en",
                    "id": "/organization/organization_scope",
                    "creator": "/user/quickwhitt",
                    "timestamp": "2010-12-17T05:00:35.000Z"
                },
                {
                    "text": "Award Presenting Organization",
                    "lang": "en",
                    "id": "/award/award_presenting_organization",
                    "creator": "/user/thadguidry",
                    "timestamp": "2011-02-17T18:05:29.000Z"
                },
                {
                    "text": "Bibs Location",
                    "lang": "en",
                    "id": "/base/biblioness/bibs_location",
                    "creator": "/user/fmkatz",
                    "timestamp": "2011-12-05T16:42:50.000Z"
                },
                {
                    "text": "Bibs Topic",
                    "lang": "en",
                    "id": "/base/biblioness/bibs_topic",
                    "creator": "/user/fmkatz",
                    "timestamp": "2011-12-05T16:42:50.000Z"
                },
                {
                    "text": "Administrative Division",
                    "lang": "en",
                    "id": "/location/administrative_division",
                    "creator": "/user/mfrancisco",
                    "timestamp": "2012-05-15T00:42:42.000Z"
                },
                {
                    "text": "Capital of administrative division",
                    "lang": "en",
                    "id": "/location/capital_of_administrative_division",
                    "creator": "/user/gmackenz",
                    "timestamp": "2012-05-25T19:36:27.005Z"
                }
            ],
            "count": 40
        },
        "/common/topic/notable_properties": {
            "valuetype": "object",
            "values": [
                {
                    "text": "Date founded",
                    "lang": "en",
                    "id": "/location/dated_location/date_founded"
                },
                {
                    "text": "Time zone(s)",
                    "lang": "en",
                    "id": "/location/location/time_zones"
                },
                {
                    "text": "Area",
                    "lang": "en",
                    "id": "/location/location/area"
                },
                {
                    "text": "Population",
                    "lang": "en",
                    "id": "/location/statistical_region/population"
                },
                {
                    "text": "Population",
                    "lang": "en",
                    "id": "/location/statistical_region/population"
                }
            ],
            "count": 5
        },
        "/type/object/guid": {
            "valuetype": "string",
            "values": [
                {
                    "text": "#9202a8c04000641f8000000000062e4e",
                    "lang": "",
                    "value": "#9202a8c04000641f8000000000062e4e"
                }
            ],
            "count": 1
        },
        "/type/object/id": {
            "valuetype": "key",
            "values": [
                {
                    "text": "/en/philadelphia",
                    "lang": "",
                    "value": "/en/philadelphia"
                }
            ],
            "count": 1
        },
        "/type/object/creator": {
            "valuetype": "object",
            "values": [
                {
                    "text": "book_bot",
                    "lang": "",
                    "id": "/user/book_bot",
                    "timestamp": "2009-08-24T23:31:30.001Z"
                }
            ],
            "count": 1
        },
        "/type/object/timestamp": {
            "valuetype": "datetime",
            "values": [
                {
                    "text": "2009-08-24T23:31:30.001Z",
                    "lang": "en",
                    "value": "2009-08-24T23:31:30.001Z"
                }
            ],
            "count": 1
        },
        "/type/object/permission": {
            "valuetype": "object",
            "values": [
                {
                    "text": "/boot/all_permission",
                    "lang": "",
                    "id": "/boot/all_permission"
                }
            ],
            "count": 1
        }
    }
}


var listData = {"status":"200 OK","result":[{"mid":"/m/05tg3","id":"/en/philadelphia_eagles","name":"Philadelphia Eagles","notable":{"name":"American football team","id":"/american_football/football_team"},"lang":"en","score":1388.862305},{"mid":"/m/0dclg","id":"/en/philadelphia","name":"Philadelphia","notable":{"name":"City/Town/Village","id":"/location/citytown"},"lang":"en","score":779.713928},{"mid":"/m/09v4qz1","id":"/en/2010_philadelphia_eagles_season","name":"2010 Philadelphia Eagles season","lang":"en","score":286.453552},{"mid":"/m/0hzpp_f","name":"2012 Philadelphia Eagles season","lang":"en","score":277.328522},{"mid":"/m/03h4jln","id":"/en/2008_philadelphia_eagles_season","name":"2008 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":270.373230},{"mid":"/m/0fq1bc5","name":"2011 Philadelphia Eagles season","lang":"en","score":266.247864},{"mid":"/m/05b4t0c","id":"/en/2009_philadelphia_eagles_season","name":"2009 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":261.286835},{"mid":"/m/027br7q","id":"/en/2004_philadelphia_eagles_season","name":"2004 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":254.404724},{"mid":"/m/0411mnv","id":"/en/eagles_giants_rivalry","name":"Eagles\u2013Giants rivalry","lang":"en","score":249.203354},{"mid":"/m/02q855s","id":"/en/2005_philadelphia_eagles_season","name":"2005 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":225.356216},{"mid":"/m/027_vq5","id":"/en/2007_philadelphia_eagles_season","name":"2007 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":221.581406},{"mid":"/m/04gqlfy","id":"/en/2003_philadelphia_eagles_season","name":"2003 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":220.964539},{"mid":"/m/0j9mwnb","name":"Philadelphia Eagles Cheerleaders","lang":"en","score":218.350632},{"mid":"/m/04jkv9j","id":"/en/2002_philadelphia_eagles_season","name":"2002 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":210.967987},{"mid":"/m/03ym6ql","id":"/en/1960_philadelphia_eagles_season","name":"1960 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":204.549255},{"mid":"/m/03ym4_4","id":"/en/1991_philadelphia_eagles_season","name":"1991 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":200.643066},{"mid":"/m/03ym45b","id":"/en/1980_philadelphia_eagles_season","name":"1980 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":191.127441},{"mid":"/m/03ym52t","id":"/en/1999_philadelphia_eagles_season","name":"1999 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":183.105667},{"mid":"/m/04lhrxz","id":"/en/1998_philadelphia_eagles_season","name":"1998 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":179.669617},{"mid":"/m/0409dpd","id":"/en/2001_philadelphia_eagles_season","name":"2001 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":176.416504},{"mid":"/m/04qb7bb","id":"/en/1992_philadelphia_eagles_season","name":"1992 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":173.967789},{"mid":"/m/04gjrvr","id":"/en/1976_philadelphia_eagles_season","name":"1976 Philadelphia Eagles season","notable":{"name":"Sports League Season","id":"/sports/sports_league_season"},"lang":"en","score":171.952347},{"mid":"/m/03ym536","id":"/en/2000_philadelphia_eagles_season","name":"2000 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":168.800858},{"mid":"/m/03ym6sp","id":"/en/1948_philadelphia_eagles_season","name":"1948 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":168.324890},{"mid":"/m/03ym4ym","id":"/en/1990_philadelphia_eagles_season","name":"1990 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":168.079086},{"mid":"/m/04n2yvp","id":"/en/1994_philadelphia_eagles_season","name":"1994 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":166.082657},{"mid":"/m/03ym47l","id":"/en/1978_philadelphia_eagles_season","name":"1978 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":164.264099},{"mid":"/m/04n2r72","id":"/en/1995_philadelphia_eagles_season","name":"1995 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":163.655380},{"mid":"/m/03ym4wt","id":"/en/1989_philadelphia_eagles_season","name":"1989 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":161.129837},{"mid":"/m/07kz3g","id":"/en/the_miracle_at_the_meadowlands","name":"Miracle at the Meadowlands","lang":"en","score":155.861649},{"mid":"/m/04mzrhm","id":"/en/1996_philadelphia_eagles_season","name":"1996 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":153.058243},{"mid":"/m/04my4l1","id":"/en/1993_philadelphia_eagles_season","name":"1993 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":149.814514},{"mid":"/m/03ym4vg","id":"/en/1988_philadelphia_eagles_season","name":"1988 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":148.306198},{"mid":"/m/05b_6kq","id":"/en/1968_philadelphia_eagles_season","name":"1968 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":145.813828},{"mid":"/m/04lhrf4","id":"/en/1997_philadelphia_eagles_season","name":"1997 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":144.503265},{"mid":"/m/04yd5vs","id":"/en/1987_philadelphia_eagles_season","name":"1987 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":142.654251},{"mid":"/m/04jd_95","id":"/en/1975_philadelphia_eagles_season","name":"1975 Philadelphia Eagles season","notable":{"name":"Sports League Season","id":"/sports/sports_league_season"},"lang":"en","score":141.591736},{"mid":"/m/04yh156","id":"/en/1986_philadelphia_eagles_season","name":"1986 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":132.847992},{"mid":"/m/05b_rms","id":"/en/1959_philadelphia_eagles_season","name":"1959 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":132.787689},{"mid":"/m/04_0cdv","id":"/en/1977_philadelphia_eagles_season","name":"1977 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":127.595612},{"mid":"/m/05f91lc","id":"/en/1952_philadelphia_eagles_season","name":"1952 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":127.462120},{"mid":"/m/05f4whx","id":"/en/1953_philadelphia_eagles_season","name":"1953 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":127.222763},{"mid":"/m/05c0s4y","id":"/en/1954_philadelphia_eagles_season","name":"1954 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":126.506256},{"mid":"/m/05f63qk","id":"/en/1950_philadelphia_eagles_season","name":"1950 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":125.935059},{"mid":"/m/05c36jb","id":"/en/1956_philadelphia_eagles_season","name":"1956 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":125.882439},{"mid":"/m/05c1tcf","id":"/en/1958_philadelphia_eagles_season","name":"1958 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":123.595093},{"mid":"/m/05c2h0v","id":"/en/1955_philadelphia_eagles_season","name":"1955 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":123.243782},{"mid":"/m/05f97p8","id":"/en/1951_philadelphia_eagles_season","name":"1951 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":123.184738},{"mid":"/m/05f3zh1","id":"/en/1947_philadelphia_eagles_season","name":"1947 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":122.600410},{"mid":"/m/05f3qpn","id":"/en/1946_philadelphia_eagles_season","name":"1946 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":122.310661},{"mid":"/m/03ym6s9","id":"/en/1949_philadelphia_eagles_season","name":"1949 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":122.292938},{"mid":"/m/05c4ng7","id":"/en/1957_philadelphia_eagles_season","name":"1957 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":120.592613},{"mid":"/m/05f85ll","id":"/en/1942_philadelphia_eagles_season","name":"1942 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":120.433197},{"mid":"/m/03ym45q","id":"/en/1979_philadelphia_eagles_season","name":"1979 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":120.190636},{"mid":"/m/05f8d9z","id":"/en/1945_philadelphia_eagles_season","name":"1945 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":120.115997},{"mid":"/m/05f8mnd","id":"/en/1941_philadelphia_eagles_season","name":"1941 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":118.309471},{"mid":"/m/04zztfc","id":"/en/1985_philadelphia_eagles_season","name":"1985 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":118.017212},{"mid":"/m/03ym4mc","id":"/en/1981_philadelphia_eagles_season","name":"1981 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":117.457672},{"mid":"/m/05f76_5","id":"/en/1939_philadelphia_eagles_season","name":"1939 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":117.287712},{"mid":"/m/05f7bcf","id":"/en/1940_philadelphia_eagles_season","name":"1940 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":117.021988},{"mid":"/m/05f7s35","id":"/en/1944_philadelphia_eagles_season","name":"1944 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":116.309013},{"mid":"/m/04ghfhp","id":"/en/1965_philadelphia_eagles_season","name":"1965 Philadelphia Eagles season","notable":{"name":"Sports League Season","id":"/sports/sports_league_season"},"lang":"en","score":116.186401},{"mid":"/m/05f9fvv","id":"/en/1938_philadelphia_eagles_season","name":"1938 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":115.611031},{"mid":"/m/05f9qdt","id":"/en/1933_philadelphia_eagles_season","name":"1933 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":115.226013},{"mid":"/m/05c1z7x","id":"/en/1972_philadelphia_eagles_season","name":"1972 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":114.035797},{"mid":"/m/04gmzz_","id":"/en/1966_philadelphia_eagles_season","name":"1966 Philadelphia Eagles season","notable":{"name":"Sports League Season","id":"/sports/sports_league_season"},"lang":"en","score":113.905434},{"mid":"/m/05f819r","id":"/en/1936_philadelphia_eagles_season","name":"1936 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":113.640587},{"mid":"/m/05fb08_","id":"/en/1934_philadelphia_eagles_season","name":"1934 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":111.287994},{"mid":"/m/04zz4nx","id":"/en/1984_philadelphia_eagles_season","name":"1984 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":110.611198},{"mid":"/m/04gr3qs","id":"/en/1964_philadelphia_eagles_season","name":"1964 Philadelphia Eagles season","notable":{"name":"Sports League Season","id":"/sports/sports_league_season"},"lang":"en","score":110.374939},{"mid":"/m/05fb2wz","id":"/en/1935_philadelphia_eagles_season","name":"1935 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":110.095657},{"mid":"/m/05bzzd2","id":"/en/1971_philadelphia_eagles_season","name":"1971 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":109.364014},{"mid":"/m/04grfts","id":"/en/1967_philadelphia_eagles_season","name":"1967 Philadelphia Eagles season","notable":{"name":"Sports League Season","id":"/sports/sports_league_season"},"lang":"en","score":109.298836},{"mid":"/m/05fb8tw","id":"/en/1937_philadelphia_eagles_season","name":"1937 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":109.261368},{"mid":"/m/05c4b7s","id":"/en/1969_philadelphia_eagles_season","name":"1969 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":108.322609},{"mid":"/m/0pb3ygh","name":"2013 Philadelphia Eagles season","lang":"en","score":107.580711},{"mid":"/m/08pncg2","id":"/authority/openlibrary/edition/OL978036M","name":"Philadelphia Eagles","notable":{"name":"Book Edition","id":"/book/book_edition"},"lang":"en","score":107.421791},{"mid":"/m/094ml5k","id":"/authority/openlibrary/edition/OL1880659M","name":"Philadelphia Eagles","notable":{"name":"Book Edition","id":"/book/book_edition"},"lang":"en","score":107.421791},{"mid":"/m/04gljsz","id":"/en/1982_philadelphia_eagles_season","name":"1982 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":105.739761},{"mid":"/m/04jcywp","id":"/en/1973_philadelphia_eagles_season","name":"1973 Philadelphia Eagles season","notable":{"name":"Sports League Season","id":"/sports/sports_league_season"},"lang":"en","score":103.942352},{"mid":"/m/04z_r6h","id":"/en/1983_philadelphia_eagles_season","name":"1983 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":101.492607},{"mid":"/m/04grs2r","id":"/en/1963_philadelphia_eagles_season","name":"1963 Philadelphia Eagles season","notable":{"name":"Sports League Season","id":"/sports/sports_league_season"},"lang":"en","score":101.105370},{"mid":"/m/04gt5vz","id":"/en/1962_philadelphia_eagles_season","name":"1962 Philadelphia Eagles season","notable":{"name":"Sports League Season","id":"/sports/sports_league_season"},"lang":"en","score":101.105339},{"mid":"/m/059_vdw","id":"/en/1974_philadelphia_eagles_season","name":"1974 Philadelphia Eagles season","notable":{"name":"Event","id":"/time/event"},"lang":"en","score":97.102585},{"mid":"/m/06fs3zy","id":"/authority/openlibrary/book/philadel_9202a8c04000641f800000000bb75328","name":"Philadelphia Eagles","notable":{"name":"Book","id":"/book/book"},"lang":"en","score":90.522415},{"mid":"/m/069gg_w","id":"/authority/openlibrary/book/philadel_9202a8c04000641f800000000bd66c80","name":"Philadelphia Eagles","notable":{"name":"Book","id":"/book/book"},"lang":"en","score":90.522415},{"mid":"/m/06g4lkt","id":"/authority/openlibrary/book/philadel_9202a8c04000641f800000000bcd052f","name":"Philadelphia Eagles","notable":{"name":"Book","id":"/book/book"},"lang":"en","score":90.522415},{"mid":"/m/09012yp","id":"/authority/openlibrary/edition/OL794739M","name":"The Philadelphia Eagles","notable":{"name":"Book Edition","id":"/book/book_edition"},"lang":"en","score":87.709534},{"mid":"/m/0hn2n8h","name":"Philadelphia Eagles Swoop","notable":{"name":"Mascot","id":"/sports/mascot"},"lang":"en","score":87.706894},{"mid":"/m/095b_bm","id":"/authority/openlibrary/edition/OL3416847M","name":"The Philadelphia Eagles","notable":{"name":"Book Edition","id":"/book/book_edition"},"lang":"en","score":86.766754},{"mid":"/m/03wm80m","id":"/en/eaglesfancast_views_on_the_philadelphia_eagles","name":"EaglesFanCast - Views on the Philadelphia Eagles","notable":{"name":"Broadcast Content","id":"/broadcast/content"},"lang":"en","score":83.458427},{"mid":"/m/02kzxgm","name":"Philadelphia Eagles Helmet","notable":{"name":"Content","id":"/type/content"},"lang":"en","score":77.180618},{"mid":"/m/06y9t6f","id":"/authority/tvrage/episode/283080","name":"Atlanta Falcons at Philadelphia Eagles","notable":{"name":"TV Episode","id":"/tv/tv_series_episode"},"lang":"en","score":77.152191},{"mid":"/m/06y9tpq","id":"/authority/tvrage/episode/283123","name":"Atlanta Falcons at Philadelphia Eagles","notable":{"name":"TV Episode","id":"/tv/tv_series_episode"},"lang":"en","score":77.152191},{"mid":"/m/06v6qvx","id":"/authority/openlibrary/book/philadel_9202a8c04000641f800000000bcb6a36","name":"The Philadelphia Eagles","notable":{"name":"Book","id":"/book/book"},"lang":"en","score":73.911247},{"mid":"/m/06dzt48","id":"/authority/openlibrary/book/philadel_9202a8c04000641f800000000bdacb6e","name":"The Philadelphia Eagles","notable":{"name":"Book","id":"/book/book"},"lang":"en","score":73.911247},{"mid":"/m/026_439","id":"/en/philadelphia_eagles_honor_roll","name":"Philadelphia Eagles Honor Roll","lang":"en","score":73.330193},{"mid":"/m/09_h2zt","id":"/authority/openlibrary/edition/OL9326207M","name":"Philadelphia Eagles (NFL Today)","notable":{"name":"Book Edition","id":"/book/book_edition"},"lang":"en","score":72.449478},{"mid":"/m/08rshtd","name":"Philadelphia Eagles seasons","notable":{"name":"Delete Task","id":"/pipeline/delete_task"},"lang":"en","score":72.065826},{"mid":"/m/07t0zfl","name":"Philadelphia Eagles Mascot Swoop","notable":{"name":"Content","id":"/type/content"},"lang":"en","score":70.406540}],"cursor":100,"cost":11,"hits":6090}