import React from 'react'

export default function Dropdown() {
  return (
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Tenant Actions
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">HealthCheck</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Run PDV</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  )
}
