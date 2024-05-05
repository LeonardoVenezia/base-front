const mockWell = {
  title: 'Went well',
  color: "bg-primary",
  cards: [
    {
      text: 'Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le ',
      author: 'leo.danti@leito.com',
      vote: 5,
      mostVoted: 1,
      votedByYou: true,
    },
    {
      text: 'Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le ',
      author: 'leo.danti@leito.com',
      vote: 2,
      mostVoted: 2,
      votedByYou: false,
    },
    {
      text: 'Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón',
      author: 'leo.danti@leito.com',
      vote: 1,
      mostVoted: 3,
      votedByYou: false,
    },
  ]
};

const mockImprove = {
  title: 'Could improve',
  color: "bg-warning",
  cards: [
    {
      text: 'Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le ',
      author: 'leo.danti@leito.com',
      vote: 5,
      mostVoted: 1,
      votedByYou: true,
    },
    {
      text: 'Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón le ',
      author: 'leo.danti@leito.com',
      vote: 2,
      mostVoted: 2,
      votedByYou: false,
    },
    {
      text: 'Loren ipsum sarasa sarasasón le Loren ipsum sarasa sarasasón',
      author: 'leo.danti@leito.com',
      vote: 1,
      mostVoted: 3,
      votedByYou: false,
    },
  ],
};

const mockActions = {
  title: 'Actions',
  color: "bg-secondary",
  cards: [],
};

const mock = [mockWell, mockImprove, mockActions];

export default mock;
