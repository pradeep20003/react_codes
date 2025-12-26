
Tasks of useReducer Hook: 


Task 1: Search Filter on Posts

 -> Goal: Allow users to filter posts by typing in a search box.

Subtasks:

1. Add a search input box above the posts list.
2. Add a new state property filteredData in your reducer.
3. Create an action type "FILTER".
4. When the user types, dispatch "FILTER" with the search text.
5. Reducer should update filteredData based on the keyword.
6. Render filteredData if available, else render full data.

========================================================================

Task 2: Pagination (Next/Previous Posts)

 --> Goal: Show 5 posts at a time, with Next/Previous buttons to navigate.

Subtasks:

1. Add currentPage to your reducer state.
2. Add actions "NEXT_PAGE" and "PREV_PAGE".
3. On "NEXT_PAGE", increase currentPage by 1 (but don’t go beyond max).
4. On "PREV_PAGE", decrease currentPage by 1 (but don’t go below 1).
5. Display only 5 posts per page using slice.

========================================================================

Task 3: Post Details on Click

 --> Goal: When a user clicks a post title, show full details.

Subtasks:

1. Add a new state property selectedPost.
2. Add an action "SHOW_DETAIL" that stores the clicked post.
3. On title click, dispatch "SHOW_DETAIL".
4. Conditionally render the details below the list (or in a popup).
5. Add a "CLOSE_DETAIL" action to hide details.

========================================================================

Task 4: Add New Post (Form + POST API)

  --> Goal: Allow users to create a new post.

Subtasks:

1. Add a simple form with fields: Title, Body.
2. On submit, call fetch(API_URL, { method: "POST", body: ... }).
3. Dispatch "PENDING" while submitting.
4. On success, dispatch "ADD_POST" with new post.
5. Reducer should add the new post at the top of the data array.
6. Show error if the request fails.

========================================================================

Task 5 (Advanced): Global State with Context

Goal: Make posts state available to multiple components using Context + useReducer.

Subtasks:

1. Create a PostsContext using React.createContext().
2. Wrap your <UseReducer /> component with a PostsProvider.
3. Move useReducer logic into the provider.
4. Pass state and dispatch via context.
5. In child components (SearchBar, PostList, PostDetail), use useContext(PostsContext) instead of props.

--> [
1. useReducer moved to PostsContext.
2. Global state is shared via PostsProvider.
3. SearchBar, PostList, and PostDetail access state/dispatch via useContext.
4. App.js is super clean — just composes components.
] -->

========================================================================