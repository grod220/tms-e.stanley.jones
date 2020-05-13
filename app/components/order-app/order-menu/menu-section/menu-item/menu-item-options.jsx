import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import AddZero from '../../../../../utilities/add-zero';

const SectionHeader = styled.div`
  font-size: 22px;
  color: black;
  background-color: #e0e0e0;
  padding: 20px;
`;

const OptionsContainer = styled.div`
  padding: 20px;
  font-size: 20px;
`;

const SingleOption = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SelectionBox = styled.div`
  display: inline-block;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  padding: 2px;
  border: 1px solid gray;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const InnerSelect = styled.div`
  background: ${(props) => (props.selected ? '#902e2d' : 'white')};
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const AdditionsCheckbox = styled.div`
  display: inline-block;
  width: 23px;
  height: 23px;
  border-radius: 3px;
  margin-right: 10px;
  margin-left: 2px;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const InnerCheck = styled.div`
  background: ${(props) => (props.selected ? '#902e2d' : 'white')};
  width: 17px;
  height: 17px;
`;

const MaxNotify = styled.div`
  font-size: 16px;
  color: #4c4c4c;
`;

const Divider = styled.div`
  margin-bottom: 20px;
  color: #4c4c4c;
  width: 100%;
`;

const ExtraCost = styled.span`
  color: #4c4c4c;
  font-size: 16px;
  font-style: italic;
`;

const MenuItemOptions = observer(({ store, options }) => {
  const handleChoice = (option, choice) => {
    if (!store.choices[option.name]) {
      store.choices[option.name] = [];
    }

    if (choice.selection) {
      store.choices[option.name] = store.choices[option.name].filter((choice) => !choice.selection);
      store.choices[option.name].push(choice);
    } else if (choice.addition) {
      if (store.choices[option.name].map((choiceobj) => choiceobj.name).includes(choice.name)) {
        store.choices[option.name] = store.choices[option.name].filter((obj) => obj.name !== choice.name);
      } else if (!option.maximum || store.choices[option.name].filter((obj) => obj.addition).length < option.maximum) {
        store.choices[option.name].push(choice);
      }
    }
  };

  const verifySelected = (optionName, choiceName) => {
    return (
      store.choices[optionName] && Boolean(store.choices[optionName].filter((obj) => obj.name === choiceName).length)
    );
  };
  return options
    ? options.map((option, i) => {
        return (
          <div key={i}>
            <SectionHeader>
              {option.name}
              {option.maximum && <MaxNotify>Choose {option.maximum} maximum</MaxNotify>}
            </SectionHeader>
            <OptionsContainer>
              {option.choices.map((choice, i, arr) => {
                return (
                  <div key={i}>
                    {choice.addition && arr[i - 1] && arr[i - 1].selection && <Divider>----</Divider>}
                    <SingleOption onClick={() => handleChoice(option, choice)}>
                      <SelectWrapper>
                        {choice.selection ? (
                          <SelectionBox>
                            <InnerSelect selected={verifySelected(option.name, choice.name)} />
                          </SelectionBox>
                        ) : (
                          <AdditionsCheckbox>
                            <InnerCheck selected={verifySelected(option.name, choice.name)} />
                          </AdditionsCheckbox>
                        )}
                        {choice.name}
                      </SelectWrapper>
                      <ExtraCost>{choice.extra && <span>add: ${AddZero(choice.extra)}</span>}</ExtraCost>
                    </SingleOption>
                  </div>
                );
              })}
            </OptionsContainer>
          </div>
        );
      })
    : null;
});

export default MenuItemOptions;
