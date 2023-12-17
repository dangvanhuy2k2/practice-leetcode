struct Data {
    int version, rate;
    string nameFood;
    Data(int version, int rate, string nameFood) {
        this->version = version;
        this->rate = rate;
        this->nameFood = nameFood;
    }
};
typedef Data d;
class Compare {
    public:
       bool operator()(d a, d b){
           if(a.rate != b.rate) return a.rate < b.rate;
           return a.nameFood > b.nameFood;
      }
};

class FoodRatings {
public:
    map<string , priority_queue<d, vector<d>, Compare>> m;
    map<string,int> mVersion;
    map<string,string> mCuisine;
    FoodRatings(vector<string>& foods, vector<string>& cuisines, vector<int>& ratings) {
        set<string> s(cuisines.begin(), cuisines.end());
        for(string cuisine: s) {
            priority_queue<d, vector<d>, Compare> tmp;
            m[cuisine] = tmp;
        }
        for(int i = 0; i < foods.size(); ++i) {
            string cuisine = cuisines[i] , food = foods[i];
            m[cuisine].push(d(0 , ratings[i], food)); 
            mVersion[food] = 0;
            mCuisine[food] = cuisine;
        }
    }
    
    void changeRating(string food, int newRating) {
        ++mVersion[food];
        string cuisine = mCuisine[food];
        m[cuisine].push(d(mVersion[food] , newRating , food));
        while(true) {
            d top = m[cuisine].top();
            string nameFood = top.nameFood;
            int version = top.version;
            if(version == mVersion[nameFood]) break;
            m[cuisine].pop();
        }
    }
    
    string highestRated(string cuisine) {
        return m[cuisine].top().nameFood;
    }
};

/**
 * Your FoodRatings object will be instantiated and called as such:
 * FoodRatings* obj = new FoodRatings(foods, cuisines, ratings);
 * obj->changeRating(food,newRating);
 * string param_2 = obj->highestRated(cuisine);
 */