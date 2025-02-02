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
          symbol: "09",
          category: "雀鯛",
          commonName: "公子小丑",
          size: "7-10公分",
          lifespan: "6~10年",
        },
        {
          symbol: "10",
          category: "雀鯛",
          commonName: "透紅小丑",
          size: "6-10公分",
          lifespan: "6~10年",
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
          symbol: "09",
          category: "雀鯛",
          commonName: "公子小丑",
          description:
            "主要棲息於潟湖及珊瑚礁區，棲息深度可達約15公尺。和海葵具共生之行為，喜歡共生的海葵有 Stoichactis kenti 等，體表之黏液可保護自己不被海葵傷害。行群聚生活，雌、雄魚均具有護巢護卵之行為，通常由一隻體型最大之雌魚帶領一隻體型第二大且具生殖能力之雄魚，其它成員包括無生殖能力之其它中成魚和一群稚魚。當最大雌魚失去後，則依雄性之順位變性成雌魚而遞補。以藻類、魚卵和浮游生物為食。",
          size: "7-10公分",
          lifespan: "6~10年",
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
          symbol: "09",
          ph: "7.8~8.4",
          salinity: "1.020~1.026",
          temperature: "24°C~28°C",
          ammonia: "0 ppm",
          nitrite: "0 ppm",
          nitrate: "低於20 ppm",
          hardness: "8-12 dKH",
          tankSize: "至少50公升",
          diet: "雜食性（多樣化食物，包括小顆粒飼料、冷凍海洋食物等）",
          compatibility: "與溫和性魚類兼容，避免與攻擊性強的魚類同箱飼養",
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
          symbol: "01",
          category: "龍",
          commonName: "黃龍",
          size: "15-25公分",
          lifespan: "10~15年",
        },
        {
          symbol: "02",
          category: "龍",
          commonName: "三色龍",
          size: "12-20公分",
          lifespan: "8~12年",
        },
        {
          symbol: "03",
          category: "神仙",
          commonName: "花臉神仙",
          size: "10-18公分",
          lifespan: "7~12年",
        },
        {
          symbol: "04",
          category: "神仙",
          commonName: "馬鞍神仙",
          size: "12-22公分",
          lifespan: "8~15年",
        },
        {
          symbol: "05",
          category: "倒吊",
          commonName: "黑三角倒吊",
          size: "14-24公分",
          lifespan: "10~15年",
        },
        {
          symbol: "06",
          category: "倒吊",
          commonName: "黃倒吊",
          size: "13-20公分",
          lifespan: "7~12年",
        },
        {
          symbol: "07",
          category: "狐狸",
          commonName: "黃狐狸",
          size: "15-25公分",
          lifespan: "8~12年",
        },
        {
          symbol: "08",
          category: "蝦虎",
          commonName: "雷達蝦虎",
          size: "8-12公分",
          lifespan: "5~8年",
        },
        {
          symbol: "09",
          category: "雀鯛",
          commonName: "公子小丑",
          size: "7-10公分",
          lifespan: "6~10年",
        },
        {
          symbol: "10",
          category: "雀鯛",
          commonName: "透紅小丑",
          size: "6-10公分",
          lifespan: "6~10年",
        },
        {
          symbol: "11",
          category: "其他",
          commonName: "大力水手",
          size: "20-30公分",
          lifespan: "10~15年",
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
