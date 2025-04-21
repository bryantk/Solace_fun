# My Process
- Fight new windows laptop
  - wsl2
  - docker desktop
  - remote wsl2 in vscode
  - node and dependencies
- Up docker DB
  - DBeaver to poke at empty DB
  - `npx drizzle-kit push`
  - refresh table connection and poke things
  - seed data and poke
- running server
  - ```In HTML, <th> cannot be a child of <thead>.
      This will cause a hydration error.```
  - needs row/col coloring to better read
  - phone number formatting
  - header columns too long, need multi-lines
  - table not taking advantage of full width
    - Probably a mobile nightmare, avoiding for now
  - search is not reactive
    - and does not work
    - nor does reset
  - seed data has repeats in specialties + is not random enough
- Code time
  - DB
    - phone number might need work (exstantions, cell vs office, etc)
    - created at (nullable?!?!?!) and no updated at
    - payload holding specialties
      - should be dedicated models for each specialty and a join table for each provider:specialty
        - would organize by specialty major. Possibly have child models for specialties within a field, or just many rows. Need real data.
    - Degrees should be its own model
      - track from which school, what time, etc.
      - Likely an entire side service for managing credentialing + education for each provider (and insurance, etc)
    - City - good start, but too inaccurate for the varying scopes of cities
      - would investigate into possiblity of: zip code, areas/cities offering service to, remote vs in person, etc
      - TLDR: more models/entire feature for location of services
    - First/Last is going to have conflicts and duplication - yay ;)

- Updated seed work to have simpler to follow random specialties
- Updated years of experience to be random
  - Stopping with seed work, would use Drizzle Generators for a real project
- Reading Drizzle documentation
- Setting 'updatedAt' DB based column
- Updating display page search capabilities
  - got distracted by poor code and forgot the higher goal
  - making api endpoint for cursor based pagination (search, and default query)
  - will need to paginate the front end
    - https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
  
# TODO (my node is rusty)
- Paginated table
- When search input is blank (or all whitespace) set no where condition to post api
- better CSS
- get with UX and make pretty AND accessable

# Beyond Scope (for now)
- `npm audit` critical + moderate patches needed
tldr: using older versions of next.js + drizzle, update for security patches
- Mobile friendly-ness

