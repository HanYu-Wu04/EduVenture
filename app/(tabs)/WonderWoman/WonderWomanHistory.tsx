import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function WonderWomanHistory() {
  const router = useRouter();

  const stats = {
    timesPlayed: 1,
    solutionsCalculated: 2,
    wordsRead: 123123,
    wins: 213,
    losses: 1,
    fastestTime: "05:23",
    slowestTime: "10:47",
    averageTime: "04:35",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game 2 History</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Played</Text>
          <Text style={styles.statValue}>{stats.timesPlayed} times</Text>
        </View>

        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Calculated</Text>
          <Text style={styles.statValue}>
            {stats.solutionsCalculated} Solutions
          </Text>
        </View>

        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Read</Text>
          <Text style={styles.statValue}>{stats.wordsRead} words</Text>
        </View>

        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Won</Text>
          <Text style={styles.statValue}>{stats.wins} times</Text>
        </View>

        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Lost</Text>
          <Text style={styles.statValue}>{stats.losses} times</Text>
        </View>

        <View style={styles.timeSection}>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Fastest time</Text>
            <Text style={styles.statValue}>{stats.fastestTime}</Text>
          </View>

          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Slowest time</Text>
            <Text style={styles.statValue}>{stats.slowestTime}</Text>
          </View>

          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Average time</Text>
            <Text style={styles.statValue}>{stats.averageTime}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push("/(tabs)/WonderWoman/WonderWoman")}
      >
        <FontAwesome name="arrow-left" size={24} color="#4a90e2" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#85CAD5",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 40,
    color: "#E13971",
    fontFamily: "Galindo_400Regular",
  },
  statsContainer: {
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "#69BB57",
    borderRadius: 5,
    padding: 10,
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "#69BB57",
  },
  statLabel: {
    fontSize: 18,
    color: "#E13971",
    fontFamily: "Galindo_400Regular",
    fontWeight: "500",
  },
  statValue: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "Galindo_400Regular",
    fontWeight: "600",
  },
  timeSection: {
    marginTop: 20,
    borderTopWidth: 2,
    borderTopColor: "#69BB57",
    paddingTop: 20,
    backgroundColor: "#69BB57",
  },
  backButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    padding: 10,
    backgroundColor: "#273DBD",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});
