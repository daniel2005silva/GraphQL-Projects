import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
       async seasonsList(_: void, __: any, { dataSources } ){
           return await dataSources.seasons.getSeasons().then(
               (data: any) => data.MRData.SeasonTable.Seasons
           );
       },
       async racesByYear(_: void, { year }, { dataSources }){
           return await dataSources.races.getYear(year).then(
               (data: any) => data.MRData.RaceTable.Races
           );
       },
       async raceSelect(_: void, { year, round }, { dataSources }){
           return await dataSources.races.getYearRound(year, round).then(
               (data: any) => data.MRData.RaceTable.Races[0]
           );
       },
       async historyDrivers(_: void, { pageElements, page }, { dataSources }){
           return await dataSources.drivers.getDrivers(pageElements, page).then(
               (data: any) => data.MRData.DriverTable.Drivers
           );
       },
       async driversYear(_: void, { year }, { dataSources }){
           return await dataSources.drivers.getDriversByYear(year).then(
               (data: any) => data.MRData.DriverTable.Drivers
           );
       },
       async driversYearAndRound(_: void, { year, round }, { dataSources }){
           return await dataSources.drivers.getDriversByYearAndRound(year, round).then(
               (data: any) => data.MRData.DriverTable.Drivers
           );
       },
       async driverSelect(_: void, { id }, { dataSources }){
           return await dataSources.drivers.getDriver(id).then(
               (data: any) => data.MRData.DriverTable.Drivers[0]
           );
       }
    }
};

export default query;