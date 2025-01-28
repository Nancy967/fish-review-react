import axios from "axios";
import {
  CompanyBalanceSheet,
  CompanyCashFlow,
  CompanyCompData,
  CompanyIncomeStatement,
  CompanyKeyMetrics,
  CompanyProfile,
  CompanySearch,
  CompanyTenK,
  CompanyHistoricalDividend,
  Dividend,
} from "./company";

export interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {
    // const data = await axios.get<SearchResponse>(
    //   `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
    // );
    const data = {
      data: [
        {
          currency: "USD",
          exchangeShortName: "NASDAQ",
          name: "Apple Inc.",
          stockExchange: "NASDAQ Stock Market",
          symbol: "AAPL",
        },
        {
          currency: "USD",
          exchangeShortName: "NYSE",
          name: "The Coca-Cola Company",
          stockExchange: "New York Stock Exchange",
          symbol: "KO",
        },
      ],
    };
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An expected error has occured.";
    }
  }
};

export const getCompanyProfile = async (query: string) => {
  try {
    // const data = await axios.get<CompanyProfile[]>(
    //   `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`
    // );
    const data = {
      data: [
        {
          symbol: "AAPL",
          price: 175.64,
          beta: 1.28,
          volAvg: 60000000,
          mktCap: 2800000000000,
          lastDiv: 0.88,
          range: "140.50-182.90",
          changes: 1.32,
          companyName: "Apple Inc.",
          currency: "USD",
          cik: "0000320193",
          isin: "US0378331005",
          exchange: "NASDAQ",
          exchangeShortName: "NASDAQ",
          industry: "Consumer Electronics",
          website: "https://www.apple.com",
          description:
            "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide.",
          ceo: "Tim Cook",
          sector: "Technology",
          counter: "1",
          fullTimeEmployees: "164000",
          phone: "+1-408-996-1010",
          address: "One Apple Park Way",
          city: "Cupertino",
          state: "California",
          zip: "95014",
          dcfDiff: 15.23,
          dcf: 190.87,
          image: "https://logo.clearbit.com/apple.com",
          ipoDate: "1980-12-12",
          defaultImage: false,
          isEtf: false,
          isActivelyTrading: true,
          isAdr: false,
          isFund: false,
        },
        {
          symbol: "TSLA",
          price: 720.5,
          beta: 2.05,
          volAvg: 35000000,
          mktCap: 800000000000,
          lastDiv: 0,
          range: "550.00-900.00",
          changes: -3.25,
          companyName: "Tesla Inc.",
          currency: "USD",
          cik: "0001318605",
          isin: "US88160R1014",
          exchange: "NASDAQ",
          exchangeShortName: "NASDAQ",
          industry: "Automotive",
          website: "https://www.tesla.com",
          description:
            "Tesla, Inc. designs, develops, manufactures, and sells electric vehicles and energy storage products.",
          ceo: "Elon Musk",
          sector: "Consumer Discretionary",
          counter: "2",
          fullTimeEmployees: "127000",
          phone: "+1-650-681-5000",
          address: "3500 Deer Creek Road",
          city: "Palo Alto",
          state: "California",
          zip: "94304",
          dcfDiff: -10.5,
          dcf: 710.0,
          image: "https://logo.clearbit.com/tesla.com",
          ipoDate: "2010-06-29",
          defaultImage: false,
          isEtf: false,
          isActivelyTrading: true,
          isAdr: false,
          isFund: false,
        },
      ],
    };
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getKeyMetrics = async (query: string) => {
  try {
    // const data = await axios.get<CompanyKeyMetrics[]>(
    //   `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?limit=40&apikey=${process.env.REACT_APP_API_KEY}`
    // );
    const data = {
      data: [
        {
          revenuePerShareTTM: 30.21,
          netIncomePerShareTTM: 6.05,
          operatingCashFlowPerShareTTM: 8.12,
          freeCashFlowPerShareTTM: 7.8,
          cashPerShareTTM: 4.12,
          bookValuePerShareTTM: 4.87,
          tangibleBookValuePerShareTTM: 3.92,
          shareholdersEquityPerShareTTM: 5.01,
          interestDebtPerShareTTM: 2.34,
          marketCapTTM: 2800000000000,
          enterpriseValueTTM: 2900000000000,
          peRatioTTM: 28.97,
          priceToSalesRatioTTM: 7.15,
          pocfratioTTM: 22.56,
          pfcfRatioTTM: 23.08,
          pbRatioTTM: 36.01,
          ptbRatioTTM: 36.01,
          evToSalesTTM: 7.4,
          enterpriseValueOverEBITDATTM: 21.45,
          evToOperatingCashFlowTTM: 23.35,
          evToFreeCashFlowTTM: 24.09,
          earningsYieldTTM: 3.45,
          freeCashFlowYieldTTM: 4.35,
          debtToEquityTTM: 0.57,
          debtToAssetsTTM: 0.32,
          netDebtToEBITDATTM: 1.12,
          currentRatioTTM: 1.35,
          interestCoverageTTM: 18.45,
          incomeQualityTTM: 1.15,
          dividendYieldTTM: 0.5,
          dividendYieldPercentageTTM: 0.5,
          payoutRatioTTM: 15.2,
          salesGeneralAndAdministrativeToRevenueTTM: 9.32,
          researchAndDevelopementToRevenueTTM: 6.5,
          intangiblesToTotalAssetsTTM: 17.45,
          capexToOperatingCashFlowTTM: 25.5,
          capexToRevenueTTM: 6.34,
          capexToDepreciationTTM: 1.45,
          stockBasedCompensationToRevenueTTM: 1.12,
          grahamNumberTTM: 120.34,
          roicTTM: 18.25,
          returnOnTangibleAssetsTTM: 15.87,
          grahamNetNetTTM: 85.67,
          workingCapitalTTM: 12000000000,
          tangibleAssetValueTTM: 50000000000,
          netCurrentAssetValueTTM: 10000000000,
          investedCapitalTTM: 30000000000,
          averageReceivablesTTM: 1500000000,
          averagePayablesTTM: 700000000,
          averageInventoryTTM: 200000000,
          daysSalesOutstandingTTM: 35.45,
          daysPayablesOutstandingTTM: 45.67,
          daysOfInventoryOnHandTTM: 30.12,
          receivablesTurnoverTTM: 10.28,
          payablesTurnoverTTM: 8.34,
          inventoryTurnoverTTM: 12.12,
          roeTTM: 25.34,
          capexPerShareTTM: 2.12,
          dividendPerShareTTM: 0.88,
          debtToMarketCapTTM: 0.12,
        },
        {
          revenuePerShareTTM: 120.45,
          netIncomePerShareTTM: 18.34,
          operatingCashFlowPerShareTTM: 20.67,
          freeCashFlowPerShareTTM: 19.8,
          cashPerShareTTM: 6.56,
          bookValuePerShareTTM: 15.34,
          tangibleBookValuePerShareTTM: 13.76,
          shareholdersEquityPerShareTTM: 14.56,
          interestDebtPerShareTTM: 5.12,
          marketCapTTM: 800000000000,
          enterpriseValueTTM: 850000000000,
          peRatioTTM: 39.15,
          priceToSalesRatioTTM: 12.45,
          pocfratioTTM: 42.67,
          pfcfRatioTTM: 43.45,
          pbRatioTTM: 25.67,
          ptbRatioTTM: 25.67,
          evToSalesTTM: 13.12,
          enterpriseValueOverEBITDATTM: 33.78,
          evToOperatingCashFlowTTM: 44.12,
          evToFreeCashFlowTTM: 45.67,
          earningsYieldTTM: 2.56,
          freeCashFlowYieldTTM: 2.23,
          debtToEquityTTM: 0.78,
          debtToAssetsTTM: 0.45,
          netDebtToEBITDATTM: 2.12,
          currentRatioTTM: 1.23,
          interestCoverageTTM: 14.23,
          incomeQualityTTM: 1.23,
          dividendYieldTTM: 0.6,
          dividendYieldPercentageTTM: 0.6,
          payoutRatioTTM: 20.5,
          salesGeneralAndAdministrativeToRevenueTTM: 10.15,
          researchAndDevelopementToRevenueTTM: 8.78,
          intangiblesToTotalAssetsTTM: 25.12,
          capexToOperatingCashFlowTTM: 22.45,
          capexToRevenueTTM: 7.34,
          capexToDepreciationTTM: 1.56,
          stockBasedCompensationToRevenueTTM: 1.45,
          grahamNumberTTM: 180.23,
          roicTTM: 15.12,
          returnOnTangibleAssetsTTM: 12.34,
          grahamNetNetTTM: 95.56,
          workingCapitalTTM: 8000000000,
          tangibleAssetValueTTM: 40000000000,
          netCurrentAssetValueTTM: 5000000000,
          investedCapitalTTM: 25000000000,
          averageReceivablesTTM: 1200000000,
          averagePayablesTTM: 600000000,
          averageInventoryTTM: 150000000,
          daysSalesOutstandingTTM: 40.12,
          daysPayablesOutstandingTTM: 50.45,
          daysOfInventoryOnHandTTM: 35.23,
          receivablesTurnoverTTM: 9.34,
          payablesTurnoverTTM: 7.12,
          inventoryTurnoverTTM: 11.23,
          roeTTM: 22.45,
          capexPerShareTTM: 3.45,
          dividendPerShareTTM: 1.12,
          debtToMarketCapTTM: 0.18,
        },
      ],
    };
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getIncomeStatement = async (query: string) => {
  try {
    // const data = await axios.get<CompanyIncomeStatement[]>(
    //   `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=50&apikey=${process.env.REACT_APP_API_KEY}`
    // );
    const data = {
      data: [
        {
          date: "2023-12-31",
          symbol: "AAPL",
          reportedCurrency: "USD",
          cik: "0000320193",
          fillingDate: "2024-01-30",
          acceptedDate: "2024-01-29",
          calendarYear: "2023",
          period: "FY",
          revenue: 394000000000,
          costOfRevenue: 212000000000,
          grossProfit: 182000000000,
          grossProfitRatio: 0.4617,
          researchAndDevelopmentExpenses: 28000000000,
          generalAndAdministrativeExpenses: 10000000000,
          sellingAndMarketingExpenses: 20000000000,
          sellingGeneralAndAdministrativeExpenses: 30000000000,
          otherExpenses: 1000000000,
          operatingExpenses: 59000000000,
          costAndExpenses: 271000000000,
          interestIncome: 2500000000,
          interestExpense: 3500000000,
          depreciationAndAmortization: 11000000000,
          ebitda: 75000000000,
          ebitdaratio: 0.1904,
          operatingIncome: 123000000000,
          operatingIncomeRatio: 0.3122,
          totalOtherIncomeExpensesNet: -1000000000,
          incomeBeforeTax: 122000000000,
          incomeBeforeTaxRatio: 0.3098,
          incomeTaxExpense: 19000000000,
          netIncome: 103000000000,
          netIncomeRatio: 0.2615,
          eps: 6.15,
          epsdiluted: 6.1,
          weightedAverageShsOut: 16750000000,
          weightedAverageShsOutDil: 16850000000,
          link: "https://www.sec.gov/Archives/edgar/data/320193/000032019324000010/index.html",
          finalLink:
            "https://www.sec.gov/Archives/edgar/data/320193/000032019324000010/financial-statements.html",
        },
        {
          date: "2023-12-31",
          symbol: "TSLA",
          reportedCurrency: "USD",
          cik: "0001318605",
          fillingDate: "2024-02-10",
          acceptedDate: "2024-02-09",
          calendarYear: "2023",
          period: "FY",
          revenue: 95000000000,
          costOfRevenue: 50000000000,
          grossProfit: 45000000000,
          grossProfitRatio: 0.4737,
          researchAndDevelopmentExpenses: 2200000000,
          generalAndAdministrativeExpenses: 1200000000,
          sellingAndMarketingExpenses: 1000000000,
          sellingGeneralAndAdministrativeExpenses: 2200000000,
          otherExpenses: 500000000,
          operatingExpenses: 4900000000,
          costAndExpenses: 54900000000,
          interestIncome: 800000000,
          interestExpense: 600000000,
          depreciationAndAmortization: 3000000000,
          ebitda: 17000000000,
          ebitdaratio: 0.1789,
          operatingIncome: 16100000000,
          operatingIncomeRatio: 0.1695,
          totalOtherIncomeExpensesNet: 200000000,
          incomeBeforeTax: 16300000000,
          incomeBeforeTaxRatio: 0.1716,
          incomeTaxExpense: 2600000000,
          netIncome: 13700000000,
          netIncomeRatio: 0.1442,
          eps: 4.85,
          epsdiluted: 4.8,
          weightedAverageShsOut: 2830000000,
          weightedAverageShsOutDil: 2850000000,
          link: "https://www.sec.gov/Archives/edgar/data/1318605/000131860524000012/index.html",
          finalLink:
            "https://www.sec.gov/Archives/edgar/data/1318605/000131860524000012/financial-statements.html",
        },
      ],
    };
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getBalanceSheet = async (query: string) => {
  try {
    // const data = await axios.get<CompanyBalanceSheet[]>(
    //   `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=20&apikey=${process.env.REACT_APP_API_KEY}`
    // );
    const data = {
      data: [
        {
          date: "2023-12-31",
          symbol: "AAPL",
          reportedCurrency: "USD",
          cik: "0000320193",
          fillingDate: "2024-01-30",
          acceptedDate: "2024-01-29",
          calendarYear: "2023",
          period: "FY",
          cashAndCashEquivalents: 28000000000,
          shortTermInvestments: 40000000000,
          cashAndShortTermInvestments: 68000000000,
          netReceivables: 26000000000,
          inventory: 5000000000,
          otherCurrentAssets: 15000000000,
          totalCurrentAssets: 114000000000,
          propertyPlantEquipmentNet: 37000000000,
          goodwill: 0,
          intangibleAssets: 0,
          goodwillAndIntangibleAssets: 0,
          longTermInvestments: 130000000000,
          taxAssets: 500000000,
          otherNonCurrentAssets: 30000000000,
          totalNonCurrentAssets: 200000000000,
          otherAssets: 0,
          totalAssets: 314000000000,
          accountPayables: 63000000000,
          shortTermDebt: 10000000000,
          taxPayables: 7000000000,
          deferredRevenue: 5000000000,
          otherCurrentLiabilities: 20000000000,
          totalCurrentLiabilities: 105000000000,
          longTermDebt: 95000000000,
          deferredRevenueNonCurrent: 3000000000,
          deferredTaxLiabilitiesNonCurrent: 0,
          otherNonCurrentLiabilities: 20000000000,
          totalNonCurrentLiabilities: 118000000000,
          otherLiabilities: 0,
          capitalLeaseObligations: 0,
          totalLiabilities: 223000000000,
          preferredStock: 0,
          commonStock: 60000000000,
          retainedEarnings: 150000000000,
          accumulatedOtherComprehensiveIncomeLoss: -20000000000,
          othertotalStockholdersEquity: 0,
          totalStockholdersEquity: 190000000000,
          totalEquity: 190000000000,
          totalLiabilitiesAndStockholdersEquity: 314000000000,
          minorityInterest: 0,
          totalLiabilitiesAndTotalEquity: 314000000000,
          totalInvestments: 170000000000,
          totalDebt: 105000000000,
          netDebt: 37000000000,
          link: "https://www.sec.gov/Archives/edgar/data/320193/000032019324000010/index.html",
          finalLink:
            "https://www.sec.gov/Archives/edgar/data/320193/000032019324000010/financial-statements.html",
        },
        {
          date: "2023-12-31",
          symbol: "TSLA",
          reportedCurrency: "USD",
          cik: "0001318605",
          fillingDate: "2024-02-10",
          acceptedDate: "2024-02-09",
          calendarYear: "2023",
          period: "FY",
          cashAndCashEquivalents: 16000000000,
          shortTermInvestments: 6000000000,
          cashAndShortTermInvestments: 22000000000,
          netReceivables: 4000000000,
          inventory: 12000000000,
          otherCurrentAssets: 5000000000,
          totalCurrentAssets: 43000000000,
          propertyPlantEquipmentNet: 24000000000,
          goodwill: 0,
          intangibleAssets: 0,
          goodwillAndIntangibleAssets: 0,
          longTermInvestments: 5000000000,
          taxAssets: 0,
          otherNonCurrentAssets: 6000000000,
          totalNonCurrentAssets: 35000000000,
          otherAssets: 0,
          totalAssets: 78000000000,
          accountPayables: 8000000000,
          shortTermDebt: 2000000000,
          taxPayables: 1000000000,
          deferredRevenue: 3000000000,
          otherCurrentLiabilities: 7000000000,
          totalCurrentLiabilities: 21000000000,
          longTermDebt: 10000000000,
          deferredRevenueNonCurrent: 2000000000,
          deferredTaxLiabilitiesNonCurrent: 0,
          otherNonCurrentLiabilities: 8000000000,
          totalNonCurrentLiabilities: 20000000000,
          otherLiabilities: 0,
          capitalLeaseObligations: 0,
          totalLiabilities: 41000000000,
          preferredStock: 0,
          commonStock: 2000000000,
          retainedEarnings: 30000000000,
          accumulatedOtherComprehensiveIncomeLoss: -2000000000,
          othertotalStockholdersEquity: 0,
          totalStockholdersEquity: 28000000000,
          totalEquity: 28000000000,
          totalLiabilitiesAndStockholdersEquity: 78000000000,
          minorityInterest: 0,
          totalLiabilitiesAndTotalEquity: 78000000000,
          totalInvestments: 11000000000,
          totalDebt: 12000000000,
          netDebt: -1000000000,
          link: "https://www.sec.gov/Archives/edgar/data/1318605/000131860524000012/index.html",
          finalLink:
            "https://www.sec.gov/Archives/edgar/data/1318605/000131860524000012/financial-statements.html",
        },
      ],
    };
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getCashFlow = async (query: string) => {
  try {
    // const data = await axios.get<CompanyCashFlow[]>(
    //   `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=100&apikey=${process.env.REACT_APP_API_KEY}`
    // );
    const data = {
      data: [
        {
          date: "2023-12-31",
          symbol: "AAPL",
          reportedCurrency: "USD",
          cik: "0000320193",
          fillingDate: "2024-01-30",
          acceptedDate: "2024-01-29",
          calendarYear: "2023",
          period: "FY",
          netIncome: 100000000000,
          depreciationAndAmortization: 12000000000,
          deferredIncomeTax: -2000000000,
          stockBasedCompensation: 6000000000,
          changeInWorkingCapital: 4000000000,
          accountsReceivables: -3000000000,
          inventory: -1000000000,
          accountsPayables: 2000000000,
          otherWorkingCapital: 500000000,
          otherNonCashItems: 1000000000,
          netCashProvidedByOperatingActivities: 112000000000,
          investmentsInPropertyPlantAndEquipment: -15000000000,
          acquisitionsNet: -5000000000,
          purchasesOfInvestments: -20000000000,
          salesMaturitiesOfInvestments: 18000000000,
          otherInvestingActivites: 200000000,
          netCashUsedForInvestingActivites: -22000000000,
          debtRepayment: -10000000000,
          commonStockIssued: 2000000000,
          commonStockRepurchased: -70000000000,
          dividendsPaid: -14000000000,
          otherFinancingActivites: 3000000000,
          netCashUsedProvidedByFinancingActivities: -79000000000,
          effectOfForexChangesOnCash: 500000000,
          netChangeInCash: 11000000000,
          cashAtEndOfPeriod: 28000000000,
          cashAtBeginningOfPeriod: 17000000000,
          operatingCashFlow: 112000000000,
          capitalExpenditure: -15000000000,
          freeCashFlow: 97000000000,
          link: "https://www.sec.gov/Archives/edgar/data/320193/000032019324000010/index.html",
          finalLink:
            "https://www.sec.gov/Archives/edgar/data/320193/000032019324000010/cash-flow-statement.html",
        },
        {
          date: "2023-12-31",
          symbol: "TSLA",
          reportedCurrency: "USD",
          cik: "0001318605",
          fillingDate: "2024-02-10",
          acceptedDate: "2024-02-09",
          calendarYear: "2023",
          period: "FY",
          netIncome: 15000000000,
          depreciationAndAmortization: 4000000000,
          deferredIncomeTax: -1000000000,
          stockBasedCompensation: 3000000000,
          changeInWorkingCapital: -500000000,
          accountsReceivables: -1000000000,
          inventory: -2000000000,
          accountsPayables: 1500000000,
          otherWorkingCapital: -500000000,
          otherNonCashItems: 500000000,
          netCashProvidedByOperatingActivities: 16000000000,
          investmentsInPropertyPlantAndEquipment: -8000000000,
          acquisitionsNet: -2000000000,
          purchasesOfInvestments: -5000000000,
          salesMaturitiesOfInvestments: 4000000000,
          otherInvestingActivites: 100000000,
          netCashUsedForInvestingActivites: -11000000000,
          debtRepayment: -3000000000,
          commonStockIssued: 1000000000,
          commonStockRepurchased: -4000000000,
          dividendsPaid: 0,
          otherFinancingActivites: 500000000,
          netCashUsedProvidedByFinancingActivities: -2500000000,
          effectOfForexChangesOnCash: 300000000,
          netChangeInCash: 2500000000,
          cashAtEndOfPeriod: 16000000000,
          cashAtBeginningOfPeriod: 13500000000,
          operatingCashFlow: 16000000000,
          capitalExpenditure: -8000000000,
          freeCashFlow: 8000000000,
          link: "https://www.sec.gov/Archives/edgar/data/1318605/000131860524000012/index.html",
          finalLink:
            "https://www.sec.gov/Archives/edgar/data/1318605/000131860524000012/cash-flow-statement.html",
        },
      ],
    };
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getCompData = async (query: string) => {
  try {
    // const data = await axios.get<CompanyCompData[]>(
    //   `https://financialmodelingprep.com/api/v4/stock_peers?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    // );
    const data = {
      data: [
        {
          symbol: "AAPL",
          peersList: ["MSFT", "GOOGL", "AMZN", "META", "NFLX"],
        },
        {
          symbol: "TSLA",
          peersList: ["F", "GM", "RIVN", "LCID", "NIO"],
        },
      ],
    };
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getTenK = async (query: string) => {
  try {
    // const data = await axios.get<CompanyTenK[]>(
    //   `https://financialmodelingprep.com/api/v3/sec_filings/${query}?type=10-K&page=0&apikey=${process.env.REACT_APP_API_KEY}`
    // );
    const data = {
      data: [
        {
          symbol: "AAPL",
          fillingDate: "2023-10-30",
          acceptedDate: "2023-10-29",
          cik: "0000320193",
          type: "10-K",
          link: "https://www.sec.gov/Archives/edgar/data/320193/000032019324000010/index.html",
          finalLink:
            "https://www.sec.gov/Archives/edgar/data/320193/000032019324000010/10-k.html",
        },
        {
          symbol: "TSLA",
          fillingDate: "2023-12-31",
          acceptedDate: "2023-12-30",
          cik: "0001318605",
          type: "10-K",
          link: "https://www.sec.gov/Archives/edgar/data/1318605/000131860524000012/index.html",
          finalLink:
            "https://www.sec.gov/Archives/edgar/data/1318605/000131860524000012/10-k.html",
        },
      ],
    };
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getHistoricalDividend = async (query: string) => {
  try {
    // const data = await axios.get<CompanyHistoricalDividend>(
    //   `https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/${query}?apikey=${process.env.REACT_APP_API_KEY}`
    // );
    const data = {
      data: {
        symbol: "AAPL",
        historical: [
          {
            date: "2024-01-10",
            label: "Q4 2023 Dividend",
            adjDividend: 0.24,
            dividend: 0.24,
            recordDate: "2024-01-02",
            paymentDate: "2024-01-15",
            declarationDate: "2023-12-20",
          },
          {
            date: "2023-10-10",
            label: "Q3 2023 Dividend",
            adjDividend: 0.23,
            dividend: 0.23,
            recordDate: "2023-10-02",
            paymentDate: "2023-10-15",
            declarationDate: "2023-09-20",
          },
        ],
      },
    };
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};
