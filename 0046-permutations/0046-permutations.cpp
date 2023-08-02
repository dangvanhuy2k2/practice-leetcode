class Solution {
public:
    int *used , *a;
    int n;
    vector<int> nums;
    vector<vector<int>> res;
    void init() {
        for(int i = 0 ; i < n ; ++i) {
            used[i] = 0;
        }
    }
    void backtrack(int i) {
        if(i == n) {
            vector<int> tmp(a , a + n);
            res.push_back(tmp);
            return;
        }

        for(int k = 0; k < n; ++k) {
            if(used[k] == 0) {
                used[k] = 1;
                a[i] = nums[k];
                backtrack(i + 1);
                used[k] = 0;
            }
        }
    }
    vector<vector<int>> permute(vector<int>& nums) {
        this->nums = nums;
        this->n = nums.size();
        used = new int[n + 5];
        a = new int[ n + 5];
        init();
        backtrack(0);
        return res;
    }
};