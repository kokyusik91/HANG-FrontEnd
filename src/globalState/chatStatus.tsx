import React from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserPkList,
  ChatHistoryUpdate,
  CreateChatRoom,
  ChatAlarmCheck,
} from 'src/redux/modules/ChatModule/chat';
// type
import { NewMessage } from 'src/redux/modules/ChatModule/type';
// socket
import socket from 'src/util/socket';
// signin status
import { signInStatus } from './signInStatus';

export const chatLogStatus = React.createContext(null);

const ChatStatus = ({ children }) => {
  const dispatch = useDispatch();

  const userPkList = useSelector(getUserPkList);
  const [chatLog, setChatLog] = React.useState<NewMessage>({
    userPk: 0,
    message: '',
    time: 0,
  });

  const { isLogIn } = React.useContext(signInStatus);

  React.useEffect(() => {
    if (isLogIn) {
      socket.on('unchecked', () => {
        dispatch(ChatAlarmCheck(Number(true)));
      });

      socket.on('newMessage', (data: NewMessage) => {
        console.log('new message 호출');
        setChatLog(data);
        dispatch(ChatHistoryUpdate(data));
      });
    }
  }, [isLogIn]);

  React.useEffect(() => {
    if (isLogIn && chatLog.userPk && !userPkList.includes(chatLog.userPk)) {
      socket.emit('newRoom', { targetPk: chatLog.userPk });
      socket.on('newRoom', (data) => {
        dispatch(
          CreateChatRoom({
            lastChat: [{ message: chatLog.message, curTime: chatLog.time }],
            unchecked: 1,
            targetPk: chatLog.userPk,
            ...data,
          }),
        );
      });
    }
  }, [chatLog, isLogIn]);

  return (
    <chatLogStatus.Provider value={{ count: 0 }}>
      {children}
    </chatLogStatus.Provider>
  );
};

export default ChatStatus;