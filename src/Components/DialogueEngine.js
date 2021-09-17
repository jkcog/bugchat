export default function DialogueEngine(stateRef, setState) {
  const answersBasic = [
    'can you elaborate?',
    'and why do you believe that is so?',
    'can you be more specific?',
    'what would be your guess?',
    'I need more details for this one',
  ];
  const answersAdvanced = [
    'have you check the logs?',
    'have you tried restarting?',
    'what does the documentation say?',
    'Maybe its a typo',
  ];
  const answersAdjust = [
    'you need to be a bit more specific',
    'come on I am trying to help',
    'whatever',
    'that does not sound like a bug',
  ];

  if (stateRef.current.disposable.length <= 7) {
    let response =
      answersAdjust[Math.floor(Math.random() * answersAdjust.length)];
    setState({
      ...stateRef.current,
      history: [...stateRef.current.history, response],
    });
  } else if (
    stateRef.current.history.length <= 3 &&
    stateRef.current.disposable.length > 6
  ) {
    let response =
      answersBasic[Math.floor(Math.random() * answersBasic.length)];
    setState({
      ...stateRef.current,
      history: [...stateRef.current.history, response],
    });
  } else if (stateRef.current.history.length >= 4) {
    let response =
      answersAdvanced[Math.floor(Math.random() * answersAdvanced.length)];
    setState({
      ...stateRef.current,
      history: [...stateRef.current.history, response],
    });
  }
}
