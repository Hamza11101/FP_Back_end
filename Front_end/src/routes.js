import React from 'react'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))


// Users components
const UpdateUser = React.lazy(() => import('./views/users/updateUser'));
const AddUser  = React.lazy(() => import('./views/users/addUser'));
const UserTable  = React.lazy(() => import('./views/users/UserTable'));
//Tag component
const UpdateTag = React.lazy(() => import('./views/tags/updateTag'));
const AddTag  = React.lazy(() => import('./views/tags/addTag'));
const TagTable  = React.lazy(() => import('./views/tags/tagTable'));
const UpdateEvent = React.lazy(() => import('./views/events/updateEvent'));
const AddEvent  = React.lazy(() => import('./views/events/addEvent'));
const EventTable  = React.lazy(() => import('./views/events/eventTable'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/users', name: 'Users', element: UserTable },
  { path: '/users/create', name: 'Users', element: AddUser },
  { path: '/users/update/:id', name: 'Users', element: UpdateUser },
  { path: '/tags', name: 'Tags', element: TagTable },
  { path: '/tags/create', name: 'Tags', element: AddTag },
  { path: '/tags/update/:id', name: 'Tags', element: UpdateTag },
  { path: '/events', name: 'Events', element: EventTable },
  { path: '/events/create', name: 'Events', element: AddEvent },
  { path: '/events/update/:id', name: 'Events', element: UpdateEvent },
 
]

export default routes
