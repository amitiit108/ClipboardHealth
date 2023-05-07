# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1: Add custom_id field to Agents table
- Add a new custom_id field to the Agents table in the database
- Update the existing API endpoints to accept and save custom_id along with the existing fields
- Write unit and integration tests to ensure the custom_id is being saved and retrieved properly
- Estimated time/effort: 4-6 hours
- Implementation details: Modify the existing database schema for Agents table to include custom_id field. Update the existing codebase to save and retrieve custom_id from the database. Add tests to ensure that custom_id is being saved and retrieved properly.

Ticket 2: Update getShiftsByFacility API to include custom_id in response
- Update the getShiftsByFacility API endpoint to include the custom_id field of the Agent assigned to each Shift in the response
- Write unit and integration tests to ensure the custom_id is being returned properly
- Estimated time/effort: 2-3 hours
- Implementation details: Modify the existing API endpoint to include the custom_id field of the Agent assigned to each Shift in the response. Add tests to ensure that custom_id is being returned properly.

Ticket 3: Update generateReport to use custom_id when available
- Modify the generateReport function to use the custom_id field of the Agent assigned to each Shift if it exists, otherwise use the internal database id
- Write unit tests to ensure that the correct id is being used in each case
- Estimated time/effort: 4-6 hours
- Implementation details: Modify the existing generateReport function to check for the custom_id field of the Agent assigned to each Shift and use it if available, otherwise use the internal database id. Add tests to ensure that the correct id is being used in each case.

Ticket 4: Update the API to allow Facilities to update custom_id for Agents
- Add a new API endpoint to allow Facilities to update the custom_id field for an Agent
- Write unit and integration tests to ensure the custom_id is being updated properly
- Estimated time/effort: 4-6 hours
- Implementation details: Add a new API endpoint to allow Facilities to update the custom_id field for an Agent. Modify the existing codebase to save and retrieve the updated custom_id from the database. Add tests to ensure that custom_id is being updated properly.

Ticket 5: Update the API to allow Facilities to retrieve custom_id for Agents
- Add a new API endpoint to allow Facilities to retrieve the custom_id field for an Agent
- Write unit and integration tests to ensure the custom_id is being returned properly
- Estimated time/effort: 2-3 hours
- Implementation details: Add a new API endpoint to allow Facilities to retrieve the custom_id field for an Agent. Add tests to ensure that custom_id is being returned properly.