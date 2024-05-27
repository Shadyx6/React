react-router-dom
            - used methods-
                   { Route, RouterProvider,  createBrowserRouter, createRouteFromElements}

Other important methods-
    link(for redirecting to dfferent component)
    navlinks(for beven better redirecting and keeping status of where we actually are)


For dynamical routing-
            {useParams}

Fetching github api-
            https://api.github.com/users/Shadyx6

for loading data before it even gets clicked use loader={functionName}
and the hook that we use to store data of api is called useLoaderData(from 'react-router-dom)

When to use </Route>:
Use </Route> when you have child routes or children elements inside a route.

When to use />:
Use /> when the element is self-closing and has no children.
This means there are no nested routes or child elements inside it.

When to use >:
Use > when opening a tag that will have children elements.
This indicates the start of a tag, and you'll close it with </Route> (or another closing tag) later.