#### To test it in a better way, let's install Apache Siege.
    $ sudo apt install siege -y

##### Run Apache Siege
 - Siege Tool Help Command
```
    $ siege --help
    SIEGE 4.0.4
    Usage: siege [options]
          siege [options] URL
          siege -g URL
    Options:
     -V, --version             VERSION, prints the version number.
     -h, --help                HELP, prints this section.
     -C, --config              CONFIGURATION, show the current config.
     -v, --verbose             VERBOSE, prints notification to screen.
     -q, --quiet               QUIET turns verbose off and suppresses output.
     -g, --get                 GET, pull down HTTP headers and display the
                               transaction. Great for application debugging.
     -p, --print               PRINT, like GET only it prints the entire page.
     -c, --concurrent=NUM      CONCURRENT users, default is 10
     -r, --reps=NUM            REPS, number of times to run the test.
     -t, --time=NUMm           TIMED testing where "m" is modifier S, M, or H
                               ex: --time=1H, one hour test.
     -d, --delay=NUM           Time DELAY, random delay before each requst
     -b, --benchmark           BENCHMARK: no delays between requests.
     -i, --internet            INTERNET user simulation, hits URLs randomly.
     -f, --file=FILE           FILE, select a specific URLS FILE.
     -R, --rc=FILE             RC, specify an siegerc file
     -l, --log[=FILE]          LOG to FILE. If FILE is not specified, the
                               default is used: /var/log/siege.log
     -m, --mark="text"         MARK, mark the log file with a string.
                               between .001 and NUM. (NOT COUNTED IN STATS)
     -H, --header="text"       Add a header to request (can be many)
     -A, --user-agent="text"   Sets User-Agent in request
     -T, --content-type="text" Sets Content-Type in request
         --no-parser           NO PARSER, turn off the HTML page parser
         --no-follow           NO FOLLOW, do not follow HTTP redirects
   
    Copyright (C) 2017 by Jeffrey Fulmer, et al.
    This is free software; see the source for copying conditions.
    There is NO warranty; not even for MERCHANTABILITY or FITNESS
    FOR A PARTICULAR PURPOSE.


``` 
 - Rate Limit Test Execution:
``` 
    $ siege -v -r 1 -c 5 http://localhost # 
    ** SIEGE 4.0.4
    ** Preparing 5 concurrent users for battle.
    The server is now under siege...
    HTTP/1.1 503     0.00 secs:     197 bytes ==> GET  /
    HTTP/1.1 200     0.00 secs:     612 bytes ==> GET  /
    HTTP/1.1 503     0.00 secs:     197 bytes ==> GET  /
    HTTP/1.1 503     0.00 secs:     197 bytes ==> GET  /
    HTTP/1.1 503     0.00 secs:     197 bytes ==> GET  /
    
    Transactions:		           1 hits
    Availability:		       20.00 %
    Elapsed time:		        0.01 secs
    Data transferred:	        0.00 MB
    Response time:		        0.00 secs
    Transaction rate:	      100.00 trans/sec
    Throughput:		        0.13 MB/sec
    Concurrency:		        0.00
    Successful transactions:           1
    Failed transactions:	           4
    Longest transaction:	        0.00
    Shortest transaction:	        0.00
```
