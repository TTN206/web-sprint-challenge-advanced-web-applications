import React from 'react';
import { render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import BubblePage from './BubblePage';

test("Renders without errors", ()=> {
    render (<BubblePage/>)
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.
    // we need to mock some data:
    const fakeGetData = jest.fn(() =>{
        return('It did a thing, hopefully!')
    })
    // Arrange:
    render(<MissionForm isFetchingData={false} getData={fakeGetData} />) // passing in the variable into getData
    // Act:
    const button = screen.queryByRole(/button/i);
    // Assert:
    console.log(fakeGetData);
    userEvent.click(button);
    expect(fakeGetData.mock.calls.length).toBe(1);
    expect(fakeGetData.mock.calls).toHaveLength(1);
    expect(fakeGetData).toHaveBeenCalled();
    expect(fakeGetData).toHaveBeenCalledTimes(1);

});