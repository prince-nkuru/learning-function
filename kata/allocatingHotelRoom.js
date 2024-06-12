/*Task
Allocate customers to hotel rooms based on their arrival and departure days. Each customer wants their own room, so two customers can stay in the same room only if the departure day of the first customer is earlier than the arrival day of the second customer. The number of rooms used should be minimized.

Input
A list or array of n customers, 1 ≤ n ≤ 1000. Each customer is represented by (arrival_day, departure_day), which are positive integers satisfying arrival_day ≤ departure_day.

Output
A list or array of size n, where element i indicates the room that customer i was allocated. Rooms are numbered 1,2, ..., k for some 1 ≤ k ≤ n. Any allocation that minimizes the number of rooms k is a valid solution.

Example:
Suppose customers is [(1,5), (2,4), (6,8), (7,7)].
Clearly customers 1 and 2 cannot get the same room. Customer 3 can use the same room as either of them, because they both leave before customer 3 arrives. Then customer 4 can be given the other room.
So any of [1,2,1,2], [1,2,2,1], [2,1,2,1], [2,1,1,2] is a valid solution.

NOTE: The list of customers is not necessarily ordered by arrival_time.

Source: CSES
Related kata:
Minimum number of taxis is a harder version, because the lists are bigger.

The Hotel with Infinite Rooms
Is room reserved?*/

function allocateRooms(customers) {
  customers = customers.map((x, i) => [i, x]).sort((a, b) => a[1][0] - b[1][0]);
  const res = [];
  const rooms = [];

  for (const [ri, cust] of customers) {
    let r = rooms.findIndex((room, i) => room < cust[0]);
    if (r === -1) r = rooms.length;

    rooms[r] = cust[1];
    res[ri] = r+1;
  }

  return res;
}

// 2

const allocateRooms = (durations, middle = []) => durations.map((duration, i) => [duration, i])
    .sort((prev, cur) => prev[0][0] - cur[0][0] || cur[0][1] - prev[0][1])
    .map(duration => {
        let index = -1;
        const increment = middle.every((_, i, origin) => {
            const cur = origin[(index = i)],
                last = cur[cur.length - 1];
            return duration[0][0] <= last[1];
        });
        middle[increment ? (++index) : index] = [...(increment ? [] : middle[index]), duration[0]];
        return [index + 1, duration[1]];
    }).sort((prev, cur) => prev[1] - cur[1]).map(cur => cur[0]);

    // 3

    function allocateRooms(customers) {
      let sortedCustomers = [...customers].map((c,i)=>(c[2] = i,c)).sort((a,b) => (a[0] - b[0]) || (a[1] - b[1]));
      let rooms = [];
      let allocations = Array.from({length: customers.length}, () => 0);
      customer : for(let [arrival, departure, index] of sortedCustomers) {
        for(let i = 0; i < rooms.length; ++i)
          if(rooms[i] < arrival) {
            rooms[i] = departure;
            allocations[index] = i + 1;
            continue customer;
          }
        rooms.push(departure);
        allocations[index] = rooms.length;
      }
      return allocations;
    }

    /*After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

*/