import moment from 'moment'

export default  [
  {
    id: "1",
    description: "Cat food",
    note: "",
    amount: 195,
    createdAt: 0
  },
  {
    id: "2",
    description: "Human food",
    note: "",
    amount: 1295,
    createdAt: moment(0).add(4,'days').valueOf()
  },
  {
    id: "3",
    description: "Rent",
    note: "",
    amount: 11195,
    createdAt: moment(0).subtract(4,'days').valueOf()
  }
];