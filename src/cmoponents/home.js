import React from 'react'

function Home() {
    return (
        <div>Upgrading from v5
            Backwards Compatibility Package
            Instead of upgrading and updating all of your code at once (which is incredibly difficult and prone to bugs), the backwards compatibility package enables you to upgrade one component, one hook, and one route at a time by running both v5 and v6 in parallel. Any code you haven't touched is still running the very same code it was before. Once all components are exclusively using the v6 APIs, your app no longer needs the compatibility package and is running on v6. The official guide can be found here.</div>
    )
}

export default Home