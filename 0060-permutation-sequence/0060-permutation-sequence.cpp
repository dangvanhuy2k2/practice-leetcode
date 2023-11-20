class Solution
{
public:
    string getPermutation(int n, int k)
    {
        string str = "";
        for (int i = 1; i <= n; ++i)
            str += to_string(i);
        int cnt = 1;
        for(int i = 1; i < k; ++i) {
            next_permutation(str.begin(), str.end());
        }
        return str;
    }
};
