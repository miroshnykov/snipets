import axios from "axios"


const fetchData = () => {
    return axios
        .get("https://randomuser.me/api/?results=2")
        .then((res) => {
            const {results} = res.data;
            // console.log(results);
            return results;
        })
        .catch((err) => {
            console.error(err);
        });
};

//
// const flattenLocations = (locations: Location[]) => {
//
//
//   const flattenedLocationHeaders = extractObjectKeys(data[0]);
//   return { headers: flattenedLocationHeaders, data };
//   // console.log(flattenedLocationHeaders);
// };
//
// const extractObjectKeys = (object: any) => {
//   let objectKeys: string[] = [];
//
//   Object.keys(object).forEach((objectKey) => {
//     const value = object[objectKey];
//     if (typeof value !== "object") {
//       objectKeys.push(objectKey);
//     } else {
//       objectKeys = [...objectKeys, ...extractObjectKeys(value)];
//     }
//   });
//
//   return objectKeys;
// };

// @ts-ignore
const run = async() => {

    let res = await fetchData()
  res.length = 2
  console.info(res)
  const data = [];
  for (const { name, gender, ...rest } of res) {
    console.info('gender:',gender)
    console.info('name:',name)
    console.info('rest:',rest)
    // data.push({
    //   ...rest,
    //   number: street.number,
    //   name: street.name,
    //   latitude: coordinates.latitude,
    //   longitude: coordinates.longitude
    // });
  }

  // console.info(data)

}

// fetchData().then((apiPeople) => {
//   const ourFlattenedLocations = flattenLocations(
//     apiPeople.map(({ location }) => location)
//   );
//   setFlattenedLocations(ourFlattenedLocations);
//
// });
run()