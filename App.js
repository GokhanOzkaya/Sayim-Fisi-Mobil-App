import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, TextInput, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Home Screen Component'i ekleyelim
const HomeScreen = () => {
  return (
    <LinearGradient
      colors={['#fff5f2', '#fff', '#ffe8e0']}
      style={styles.container}
    >
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Üst Kısım - Excel Yükleme Alanı */}
        <View style={styles.uploadSection}>
          <View style={styles.uploadContainer}>
            <Ionicons name="cloud-upload-outline" size={60} color="#ff5722" />
            <Text style={styles.uploadTitle}>Excel Dosyası Yükle</Text>
            <Text style={styles.uploadSubtitle}>XLS, XLSX formatları desteklenir</Text>
            <Pressable
              style={({ pressed }) => [
                styles.uploadButton,
                { backgroundColor: pressed ? "#ff7043" : "#ff5722" },
              ]}
            >
              <Text style={styles.uploadButtonText}>Dosya Seç</Text>
            </Pressable>
          </View>
        </View>

        {/* Alt Kısım - Excel Listesi */}
        <View style={styles.listSection}>
          <Text style={styles.listTitle}>Yüklenen Dosyalar</Text>
          
          <ScrollView style={styles.fileList}>
            {/* Örnek dosya listesi */}
            <View style={styles.fileItem}>
              <View style={styles.fileInfo}>
                <Ionicons name="document-text" size={24} color="#ff5722" />
                <View style={styles.fileDetails}>
                  <Text style={styles.fileName}>Sayım_Listesi_2024.xlsx</Text>
                  <Text style={styles.fileDate}>23 Mart 2024, 14:30</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#666" />
            </View>

            <View style={styles.fileItem}>
              <View style={styles.fileInfo}>
                <Ionicons name="document-text" size={24} color="#ff5722" />
                <View style={styles.fileDetails}>
                  <Text style={styles.fileName}>Stok_Raporu.xlsx</Text>
                  <Text style={styles.fileDate}>22 Mart 2024, 09:15</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#666" />
            </View>

            <View style={styles.fileItem}>
              <View style={styles.fileInfo}>
                <Ionicons name="document-text" size={24} color="#ff5722" />
                <View style={styles.fileDetails}>
                  <Text style={styles.fileName}>Ürün_Listesi_Mart.xlsx</Text>
                  <Text style={styles.fileDate}>20 Mart 2024, 16:45</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#666" />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

// Login Screen Component
const LoginScreen = ({ navigation }) => {
  const goToRegister = () => {
    console.log("Attempting to navigate to Register");  // Debug için
    navigation.navigate('Register');
  };

  return (
    <LinearGradient
      colors={['#fff5f2', '#fff', '#ffe8e0']}
      style={styles.container}
    >
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <StatusBar style="dark" />
        
        <View style={styles.formContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="person-circle-outline" size={100} color="#ff5722" />
          </View>

          <Text style={styles.title}>Hoş Geldiniz</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Kullanıcı Adı</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Kullanıcı adınızı girin"
              placeholderTextColor="#666"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Şifre</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Şifrenizi girin"
              placeholderTextColor="#666"
              secureTextEntry={true}
              autoCapitalize="none"
              keyboardType="numeric"
              maxLength={6}
            />
          </View>

          <Pressable
            onPress={() => navigation.navigate('Home')}
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#ff7043" : "#ff5722" },
            ]}
          >
            <Text style={styles.buttonText}>Giriş</Text>
          </Pressable>

          <Pressable 
            onPress={goToRegister}
            style={styles.signupContainer}
          >
            <Text style={styles.signupText}>Hesabınız yok mu? </Text>
            <Text style={styles.signupLink}>Hemen Kaydol</Text>
          </Pressable>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

// Register Screen Component
const RegisterScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#fff5f2', '#fff', '#ffe8e0']}
      style={styles.container}
    >
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <StatusBar style="dark" />
        
        <View style={styles.formContainer}>
          <View style={styles.iconContainer}>
            <Ionicons 
              name="person-circle"
              size={80}
              color="#ff5722" 
            />
          </View>

          <Text style={styles.title}>Yeni Hesap Oluştur</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Kullanıcı Adı</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Kullanıcı adınızı girin"
              placeholderTextColor="#666"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Email adresinizi girin"
              placeholderTextColor="#666"
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Şifre</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Şifrenizi girin"
              placeholderTextColor="#666"
              secureTextEntry={true}
              autoCapitalize="none"
              keyboardType="numeric"
              maxLength={6}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Şifre Tekrar</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Şifrenizi tekrar girin"
              placeholderTextColor="#666"
              secureTextEntry={true}
              autoCapitalize="none"
              keyboardType="numeric"
              maxLength={6}
            />
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#ff7043" : "#ff5722" },
            ]}
          >
            <Text style={styles.buttonText}>Hesap Oluştur</Text>
          </Pressable>

          <Pressable 
            onPress={() => navigation.navigate('Login')}
            style={styles.signupContainer}
          >
            <Text style={styles.signupText}>Zaten hesabınız var mı? </Text>
            <Text style={styles.signupLink}>Giriş Yap</Text>
          </Pressable>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

// Ana sayfa tab navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          height: 85,
          paddingBottom: 35,
          paddingTop: 8,
          borderTopWidth: 0,
          elevation: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -4,
          },
          shadowOpacity: 0.1,
          shadowRadius: 8,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'AnaSayfa':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Arama':
              iconName = focused ? 'search' : 'search-outline';
              break;
            case 'Ekle':
              iconName = focused ? 'add-circle' : 'add-circle-outline';
              break;
            case 'Bildirimler':
              iconName = focused ? 'notifications' : 'notifications-outline';
              break;
            case 'Profil':
              iconName = focused ? 'person' : 'person-outline';
              break;
          }

          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: '#ff5722',
        tabBarInactiveTintColor: '#666',
        tabBarLabelStyle: {
          fontSize: 11,
          marginBottom: 10,
        }
      })}
    >
      <Tab.Screen 
        name="AnaSayfa" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Ana Sayfa',
        }}
      />
      <Tab.Screen 
        name="Arama" 
        component={SearchScreen}
        options={{
          tabBarLabel: 'Arama',
        }}
      />
      <Tab.Screen 
        name="Ekle" 
        component={AddScreen}
        options={{
          tabBarLabel: 'Ekle',
        }}
      />
      <Tab.Screen 
        name="Bildirimler" 
        component={NotificationsScreen}
        options={{
          tabBarLabel: 'Bildirimler',
        }}
      />
      <Tab.Screen 
        name="Profil" 
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profil',
        }}
      />
    </Tab.Navigator>
  );
};

// Profil ekranı
const ProfileScreen = () => {
  return (
    <LinearGradient
      colors={['#fff5f2', '#fff', '#ffe8e0']}
      style={styles.container}
    >
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.homeContainer}>
          <Text style={styles.welcomeTitle}>Profil</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

// Ayarlar ekranı
const SettingsScreen = () => {
  return (
    <LinearGradient
      colors={['#fff5f2', '#fff', '#ffe8e0']}
      style={styles.container}
    >
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.homeContainer}>
          <Text style={styles.welcomeTitle}>Ayarlar</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

// Yeni ekranlar için component'ler ekleyelim
const SearchScreen = () => {
  return (
    <LinearGradient
      colors={['#fff5f2', '#fff', '#ffe8e0']}
      style={styles.container}
    >
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.searchContainer}>
          {/* Başlık ve Arama Kutusu */}
          <View style={styles.searchHeader}>
            <Text style={styles.searchTitle}>Sayım Geçmişi</Text>
            <View style={styles.searchInputContainer}>
              <Ionicons name="search-outline" size={20} color="#666" />
              <TextInput
                style={styles.searchInput}
                placeholder="Sayım listesi ara..."
                placeholderTextColor="#666"
              />
            </View>
          </View>

          {/* Sayım Listeleri */}
          <ScrollView style={styles.historyList}>
            {/* Onaylanmış Sayım */}
            <View style={styles.historyItem}>
              <View style={styles.historyContent}>
                <View style={styles.historyIcon}>
                  <Ionicons name="document-text" size={24} color="#ff5722" />
                </View>
                <View style={styles.historyDetails}>
                  <Text style={styles.historyFileName}>Mart_Sayım_2024.xlsx</Text>
                  <Text style={styles.historyDate}>23 Mart 2024, 14:30</Text>
                  <View style={[styles.statusBadge, { backgroundColor: '#e7f6e7' }]}>
                    <Text style={[styles.statusText, { color: '#2e7d32' }]}>Onaylandı</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Beklemede olan Sayım */}
            <View style={styles.historyItem}>
              <View style={styles.historyContent}>
                <View style={styles.historyIcon}>
                  <Ionicons name="document-text" size={24} color="#ff5722" />
                </View>
                <View style={styles.historyDetails}>
                  <Text style={styles.historyFileName}>Şubat_Sayım_2024.xlsx</Text>
                  <Text style={styles.historyDate}>15 Şubat 2024, 09:45</Text>
                  <View style={[styles.statusBadge, { backgroundColor: '#fff3e0' }]}>
                    <Text style={[styles.statusText, { color: '#ef6c00' }]}>Beklemede</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Reddedilmiş Sayım */}
            <View style={styles.historyItem}>
              <View style={styles.historyContent}>
                <View style={styles.historyIcon}>
                  <Ionicons name="document-text" size={24} color="#ff5722" />
                </View>
                <View style={styles.historyDetails}>
                  <Text style={styles.historyFileName}>Ocak_Sayım_2024.xlsx</Text>
                  <Text style={styles.historyDate}>20 Ocak 2024, 16:15</Text>
                  <View style={[styles.statusBadge, { backgroundColor: '#ffebee' }]}>
                    <Text style={[styles.statusText, { color: '#c62828' }]}>Reddedildi</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Gönderilmiş Sayım */}
            <View style={styles.historyItem}>
              <View style={styles.historyContent}>
                <View style={styles.historyIcon}>
                  <Ionicons name="document-text" size={24} color="#ff5722" />
                </View>
                <View style={styles.historyDetails}>
                  <Text style={styles.historyFileName}>Aralık_Sayım_2023.xlsx</Text>
                  <Text style={styles.historyDate}>25 Aralık 2023, 11:30</Text>
                  <View style={[styles.statusBadge, { backgroundColor: '#e3f2fd' }]}>
                    <Text style={[styles.statusText, { color: '#1565c0' }]}>Gönderildi</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const AddScreen = () => {
  return (
    <LinearGradient
      colors={['#fff5f2', '#fff', '#ffe8e0']}
      style={styles.container}
    >
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.addContainer}>
          {/* Üst Başlık */}
          <Text style={styles.addTitle}>Yeni Sayım</Text>
          <Text style={styles.addSubtitle}>Sayıma başlamak için hazır mısınız?</Text>

          {/* Ana Buton */}
          <Pressable
            style={({ pressed }) => [
              styles.scanButton,
              { transform: [{ scale: pressed ? 0.98 : 1 }] }
            ]}
          >
            <View style={styles.scanButtonContent}>
              <View style={styles.scanIconContainer}>
                <Ionicons name="barcode-outline" size={80} color="#ff5722" />
              </View>
              <Text style={styles.scanButtonText}>Sayıma Başla</Text>
              <Text style={styles.scanButtonSubtext}>Barkod okutmak için dokun</Text>
            </View>
          </Pressable>

          {/* Alt Bilgi Kartları */}
          <View style={styles.infoCardsContainer}>
            <View style={styles.infoCard}>
              <View style={styles.infoIconContainer}>
                <Ionicons name="time-outline" size={24} color="#ff5722" />
              </View>
              <Text style={styles.infoTitle}>Son Sayım</Text>
              <Text style={styles.infoText}>2 gün önce</Text>
            </View>

            <Pressable style={styles.infoCard}>
              <View style={styles.infoIconContainer}>
                <Ionicons name="list-outline" size={24} color="#ff5722" />
              </View>
              <Text style={styles.infoTitle}>Sayım Listesi</Text>
              <Text style={styles.infoText}>Seç</Text>
            </Pressable>
          </View>

          {/* İpucu */}
          <View style={styles.tipContainer}>
            <Ionicons name="bulb-outline" size={20} color="#666" />
            <Text style={styles.tipText}>
              İpucu: Sayıma başlamadan önce sayım listesi seçtiğinizden emin olun
            </Text>
          </View>

          {/* Seçili Liste - En Alta Taşındı */}
          <View style={styles.selectedListContainer}>
            <Text style={styles.selectedListLabel}>Seçili Liste:</Text>
            <View style={styles.selectedListContent}>
              <Ionicons name="document-text-outline" size={24} color="#ff5722" />
              <Text style={styles.selectedListText}>Mart_2024_Sayım.xlsx</Text>
              <Pressable style={styles.changeListButton}>
                <Text style={styles.changeListText}>Değiştir</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const NotificationsScreen = () => {
  return (
    <LinearGradient
      colors={['#fff5f2', '#fff', '#ffe8e0']}
      style={styles.container}
    >
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.homeContainer}>
          <Text style={styles.welcomeTitle}>Bildirimler</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

// App Component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30, // Alt kısımda extra padding
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  homeContainer: {
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  addContainer: {
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  iconContainer: {
    width: 120,
    height: 120,
    backgroundColor: '#fff5f2',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: "#ff5722",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
    fontWeight: "500",
  },
  textInput: {
    width: "100%",
    height: 50,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#ff5722",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    padding: 10,
  },
  signupText: {
    color: "#666",
    fontSize: 14,
  },
  signupLink: {
    color: "#ff5722",
    fontSize: 14,
    fontWeight: "600",
    textDecorationLine: 'underline',
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 24,
    color: '#666',
  },
  uploadSection: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  uploadContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  uploadTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
  },
  uploadSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    marginBottom: 20,
  },
  uploadButton: {
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  uploadButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  listSection: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  fileList: {
    flex: 1,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  fileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  fileDetails: {
    marginLeft: 15,
    flex: 1,
  },
  fileName: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  fileDate: {
    fontSize: 12,
    color: '#666',
    marginTop: 3,
  },
  searchHeader: {
    padding: 20,
    paddingTop: 60,
  },
  searchTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  historyList: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  historyItem: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  historyContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff5f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  historyDetails: {
    marginLeft: 15,
    flex: 1,
  },
  historyFileName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  historyDate: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  addTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  addSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 40,
  },
  scanButton: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 20,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  scanButtonContent: {
    alignItems: 'center',
    padding: 20,
  },
  scanIconContainer: {
    width: 150,
    height: 150,
    backgroundColor: '#fff5f2',
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  scanButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  scanButtonSubtext: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  infoCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  infoCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    flex: 0.47,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  infoIconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#fff5f2',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  tipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 15,
    padding: 15,
    marginTop: 30,
  },
  tipText: {
    fontSize: 13,
    color: '#666',
    marginLeft: 10,
    flex: 1,
  },
  selectedListContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  selectedListLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  selectedListContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedListText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    flex: 1,
    marginLeft: 10,
  },
  changeListButton: {
    backgroundColor: '#fff5f2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  changeListText: {
    color: '#ff5722',
    fontSize: 14,
    fontWeight: '600',
  },
});
